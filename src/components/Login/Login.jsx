import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
          navigate('/User')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
    };

    return(
        <section className="login">
            <h2>Ingreso solo de administradores</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <label htmlFor="email">Ingrese su E-mail:</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Ingrese su email..." />
              <label htmlFor="password">Ingrese la contraseña</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingrese la contraseña..." />
              <button>Continuar</button>
            </form>
        </section>
    )
}

export default Login