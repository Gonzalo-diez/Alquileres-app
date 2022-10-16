import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  

function Publicacion({ data }) {
    const {imagen, imagen1, imagen2, imagen3, imagen4, tipo, subtipo, titulo, descripcion} = data
    return(
        <section className="detalles">
            <div className="detail-container">
                <div className="detail">
                    <div className="carousel-container">
                        <Carousel showArrows={true} className="product-container">
                            <div className="myCard">
                                <img src={imagen} alt={tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={imagen1} alt={tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={imagen2} alt={tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={imagen3} alt={tipo} className="img-carousel" />
                            </div>
                            <div className="myCard">
                                <img src={imagen4} alt={tipo} className="img-carousel" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="detail-content">
                        <h3>{tipo}: {subtipo}</h3>
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publicacion