import React from "react";

function Publicacion({ data }) {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return(
        <section className="detalles">
            <div className="detail-container">
                <div className="detail">
                    <div className="carousel-container">
                        <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                        <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
                        <div className="product-container">
                            <div className="myCard">
                                <img src={data.imagen} alt={data.tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={data.imagen1} alt={data.tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={data.imagen2} alt={data.tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={data.imagen3} alt={data.tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={data.imagen4} alt={data.tipo} className="img-carousel" />
                            </div>
                        </div>
                    </div>
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