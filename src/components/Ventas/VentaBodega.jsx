import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function VentaBodega() {
    const [data, setData] = useState([])

    useEffect(() => {
        const coleccionDatos = collection(db, "publicaciones")
        const filtro1 = where("tipo","==","venta")
        const filtro2 = where("subtipo","==","galpon/bodega")
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
        <section className="productos">
            {data.map((elemento, indice) => {
                return(
                    <div key={indice} className="box-container">
                        <div className="box">
                            <img src={elemento.imagen} alt={elemento.titulo} className="img-container" />
                            <div className="box-content">
                                <h3>{elemento.titulo}</h3>
                                <button><Link to={`/Item/${elemento.id}`} className="links">Saber más</Link></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default VentaBodega