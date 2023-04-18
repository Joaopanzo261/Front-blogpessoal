import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './assets/paginas/cadastroUsuario/CadastroUsuario';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/paginas/home/Home';
import Login from './assets/paginas/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
            <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
             <Route path="/home" element={<Home />} />
             <Route path="/cadastrousuario" element={<CadastroUsuario />} />
             
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
