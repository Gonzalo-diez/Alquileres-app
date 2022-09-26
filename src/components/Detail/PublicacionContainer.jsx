import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../db/Firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import Publicacion from "./Publicacion";

function PublicacionContainer() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const coleccionDatos = collection(db, "publicaciones")
        const docRef = doc(coleccionDatos,id)
        const pedido = getDoc(docRef)
        pedido
            .then((resultado) => {
                const item = resultado.data()
                setData({...item, id})
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return(
        <section>
            <Publicacion key={data.id} data={data} />
        </section>
    )
}

export default PublicacionContainer