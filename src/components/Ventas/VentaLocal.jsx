import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { ref } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";

function VentaLocal() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const pedido = ref(db, "publicaciones/Venta/Local")
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
                    <div key={indice} className="box-container" onClick={() => navigate(`/Item/${id}`)}>
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