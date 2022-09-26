import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function VentaLocal() {
    const [data, setData] = useState([])

    useEffect(() => {
        const coleccionDatos = collection(db, "publicaciones")
        const filtro1 = where("tipo","==","venta")
        const filtro2 = where("subtipo","==","local")
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
        <section className="subtipo">
            {data.map((elemento, indice) => {
                const {imagen, titulo, id} = elemento
                return(
                    <div key={indice} className="box-container">
                        <div className="box">
                            <img src={imagen} alt={titulo} />
                            <div className="box-content">
                                <h2>{titulo}</h2>
                                <button><Link to={`/Item/${id}`} className="links">Ver más detalles</Link></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default VentaLocal