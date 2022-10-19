import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

function DeleteData() {
    const [data, setData] = useState([])
    const handleDelete = async(id, file) => {
        try {
            await deleteDoc(doc(db, "publicaciones", id))
            setData(data.filter((item) => item.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collection(db, "publicaciones"))
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }

        getData()
    })

    return(
        <section className="borrar">
            {data.map((item, indice) => {
                const { tipo, subtipo, titulo, id } = item
                return(
                    <div key={indice} className="delete-container">
                        <div className="delete">
                            <h3>{titulo}</h3>
                            <h3>{tipo}: {subtipo}</h3>
                            <button onClick={() => handleDelete(id)} className="btn-delete">Borrar</button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default DeleteData