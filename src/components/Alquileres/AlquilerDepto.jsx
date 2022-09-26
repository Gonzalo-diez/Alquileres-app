import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function AlquilerDepto() {
    const [data, setData] = useState([])

    useEffect(() => {
        const coleccionDatos = collection(db, "publicaciones")
        const filtro1 = where("tipo","==","alquiler")
        const filtro2 = where("subtipo","==","departamento")
        const consulta = query(coleccionDatos,filtro1,filtro2)
        const pedido = getDocs(consulta)
        pedido  
            .then((resultado) => {
                setData(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <section>
            {data.map((elemento, indice) => {
                return(
                    <div key={indice}>
                        <img src={elemento.imagen} alt={elemento.titulo} />
                        <div>
                            <h3>{elemento.titulo}</h3>
                            <button><Link to={`/Item/${elemento.id}`} className="links">Saber más</Link></button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default AlquilerDepto