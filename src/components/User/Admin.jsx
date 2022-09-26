import React, { useState, useEffect } from "react";
import { db, storage } from "../db/Firebase";
import { UserAuth } from "../Context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useNavigate } from "react-router-dom";
import DeleteData from "./DeleteData";

function Admin() {
    const { logOut } = UserAuth();
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const [mostrar, setMostrar] = useState(true);

    const handleLogout = async () => {
        try {
          await logOut();
          navigate('/Login');
          console.log('Cerrando sesión')
        } catch (e) {
          console.log(e.message);
        }
    };

    const deleteTable = () => {
        setMostrar(false);
    }

    useEffect(() => {
        function uploadFile() {
            const name = new Date().getTime() + file.name;
            console.log(name)
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc(progress);
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, imagen: downloadURL }));
                    })
                }
            )
        }
        file && uploadFile();
    }, [file]);

    console.log(data);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        addDoc(collection(db, "publicaciones"), {
            ...data,
            timeStamp: serverTimestamp(),
        }).then(() => {
            alert("Datos subidos");
        }).catch((err) => {
            console.log(err)
        })
    };

    if(mostrar) {
        return(
            <section className="admin">
                <button className="logoutbtn" onClick={handleLogout}>Cerrar sesión</button>
                <form onSubmit={handleAdd} className="add-form">
                    <label>Ingrese la opción a publicar:</label>
                    <select required id="tipo" onChange={handleInput}>
                        <option>--Ingrese la opcion--</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="venta">Venta</option>
                    </select>
                    <label>Ingrese el tipo de publicación:</label>
                    <select required id="subtipo" onChange={handleInput}>
                        <option>--Ingrese el tipo--</option>
                        <option value="casa">Casa</option>
                        <option value="departamento">Departamento</option>
                        <option value="local">Local</option>
                        <option value="galpon/bodega">Galpon/Bodega</option>
                    </select>
                    <label>Ingrese el titulo de la publicación:</label>
                    <input type="text" placeholder="Ingrese el titulo" id="titulo" onChange={handleInput} required />
                    <label>Ingrese la descripción de la publicación:</label>
                    <textarea cols="30" rows="10" id="descripcion" placeholder="Escriba la descripción de la publicación" required onChange={handleInput}></textarea>
                    <label>Suba la imagen:</label>
                    <div className="btn-save">
                        <input type="file" required accept=".jpg, .jpeg, .png"  onChange={(e) => setFile(e.target.files[0])} />
                        <button disabled={per !== null && per < 100} id="btnSave">Publicar</button>
                    </div>
                    <input type="reset" className="reset" />
                    <button onClick={deleteTable}>Quiere eliminar una publicación?</button>
                </form>
            </section>
        )
    }
    else {
        return(
            <DeleteData />
        )
    }
}

export default Admin