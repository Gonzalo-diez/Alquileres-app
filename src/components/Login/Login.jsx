import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(emailRef.current.value, passwordRef.current.value)
          navigate('/User')
        } catch (e) {
          setError(e.message, error)
          toast.warn("Esta cuenta no existe, solo administradores!", {
            position: toast.POSITION.TOP_CENTER
          })
        }
    };

    return(
        <section className="login">
            <h2>Ingreso solo de administradores</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <label htmlFor="email">Ingrese su E-mail:</label>
              <input ref={emailRef} type="email" id="email" placeholder="Ingrese su email..." />
              <label htmlFor="password">Ingrese la contraseña</label>
              <input ref={passwordRef} type="password" placeholder="Ingrese la contraseña..." />
              <button>Continuar</button>
            </form>
            <ToastContainer />
        </section>
    )
}

export default Login