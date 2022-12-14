import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa"
import logo from "../img/logo.png"

function Navbar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <Link to="/" className="logo-container"><img src={logo} alt="logo" className="logo" /></Link>
            <nav className="navbar" ref={navRef}>
                <h4><Link to="/" className="menu-links">Inicio</Link></h4>
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
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <button><Link to="/Login" className="menu-links links"><FaUserAlt /></Link></button>
        </header>
    )
}

export default Navbar