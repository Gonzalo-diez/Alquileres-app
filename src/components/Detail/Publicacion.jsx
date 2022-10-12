import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  

function Publicacion({ data }) {
    return(
        <section className="detalles">
            <div className="detail-container">
                <div className="detail">
                    <div className="carousel-container">
                        <Carousel showArrows={true} className="product-container">
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
                        </Carousel>
                    </div>
                    <div className="detail-content">
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