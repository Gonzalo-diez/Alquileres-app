import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"


function Navbar() {
    return(
        <header>
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <h4><Link to="/" className="links">Inicio</Link></h4>
                <div className="dropdown">
                    <button className="dropbtn">Alquileres</button>
                    <div className="dropdown-content">
                        <h4><Link to="/Alquileres/Casa" className="dropitem">Casa</Link></h4>
                        <h4><Link to="/Alquileres/Depto" className="dropitem">Departamento</Link></h4>
                        <h4><Link to="/Alquileres/Local" className="dropitem">Local</Link></h4>
                        <h4><Link to="/Alquileres/Bodega" className="dropitem">Galpon/Bodega</Link></h4>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Ventas</button>
                    <div className="dropdown-content">
                        <h4><Link to="/Ventas/Casa" className="dropitem">Casa</Link></h4>
                        <h4><Link to="/Ventas/Depto" className="dropitem">Departamento</Link></h4>
                        <h4><Link to="/Ventas/Local" className="dropitem">Local</Link></h4>
                        <h4><Link to="/Ventas/Bodega" className="dropitem">Galpon/Bodega</Link></h4>
                    </div>
                </div>
                <h4><Link to="/Login" className="links">Usuario</Link></h4>
            </div>
        </header>
    )
}

export default Navbar