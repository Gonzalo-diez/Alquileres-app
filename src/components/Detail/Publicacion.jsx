import React from "react";

function Publicacion({ data }) {
    return(
        <section className="detalle">
            <div className="box-container">
                <div className="box">
                    <img src={data.imagen} alt={data.titulo} />
                    <div className="box-content">
                        <h3>{data.tipo}: {data.subtipo}</h3>
                        <h3>{data.titulo}</h3>
                        <p>{data.descripcion}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publicacion