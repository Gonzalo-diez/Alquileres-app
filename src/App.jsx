import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login";
import Admin from "./components/User/Admin";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AlquilerCasa from "./components/Alquileres/AlquilerCasa";
import AlquilerDepto from "./components/Alquileres/AlquilerDepto";
import AlquilerLocal from "./components/Alquileres/AlquilerLocal";
import AlquilerBodega from "./components/Alquileres/AlquilerBodega";
import VentaCasa from "./components/Ventas/VentaCasa";
import VentaDepto from "./components/Ventas/VentaDepto";
import VentaLocal from "./components/Ventas/VentaLocal";
import VentaBodega from "./components/Ventas/VentaBodega";
import PublicacionContainer from "./components/Detail/PublicacionContainer";
import ErrorPage from "./components/Error/Error";
import { AuthContextProvider } from "./components/Context/AuthContext";
import ProtectedRoute from "./components/Protected Route/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/Alquileres/Casa" element={<AlquilerCasa />} />
            <Route path="/Alquileres/Depto" element={<AlquilerDepto />} />
            <Route path="/Alquileres/Local" element={<AlquilerLocal />} />
            <Route path="/Alquileres/Bodega" element={<AlquilerBodega />} />
            <Route path="/Ventas/Casa" element={<VentaCasa />} />
            <Route path="/Ventas/Depto" element={<VentaDepto />} />
            <Route path="/Ventas/Local" element={<VentaLocal />} />
            <Route path="/Ventas/Bodega" element={<VentaBodega />} />
            <Route path="/Item/:id" element={<PublicacionContainer />} />
            <Route 
              path="/User" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
