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
        <section className="productos">
            {data.map((elemento, indice) => {
                const {imagen, titulo, id} = elemento;
                return(
                    <div key={indice} className="box-container">
                        <div className="box">
                            <img src={imagen} alt={titulo} className="img-container" />
                            <div className="box-content">
                                <h3>{titulo}</h3>
                                <button><Link to={`/Item/${id}`} className="links">Saber más</Link></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default VentaLocal