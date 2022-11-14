
import React, { useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function ItemListContainer() {
    const [items, setItem] = useState([])

    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collection(db, "publicaciones"))
            setItem(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }

        getData()
    }, [items])

    return(
        <section className="productos">
            {items.map((item, indice) => {
                const {imagen, titulo, id, tipo, subtipo} = item;
                return(
                    <div key={indice} className="box-container">
                        <div className="box">
                            <img src={imagen} alt={titulo} className="img-container" />
                            <div className="box-content">
                                <h2>{titulo}</h2>
                                <h3>{tipo}</h3>
                                <h3>{subtipo}</h3>
                                <button><Link to={`/Item/${id}`} className="links">Ver más detalles</Link></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ItemListContainer