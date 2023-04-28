import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './assets/paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/paginas/home/Home';
import Login from './assets/paginas/login/Login';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (

    <Provider store ={store}> 
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
            <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
             <Route path="/home" element={<Home />} />
             <Route path="/cadastrousuario" element={<CadastroUsuario />} />
             <Route path="/temas" element={<ListaTema />} />
             <Route path="/posts" element={<ListaPostagem />} />

             <Route path="/formularioPostagem" element={<CadastroPost />} />
             <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
             <Route path="/formularioTema" element={<CadastroTema />} />
             <Route path="/formularioTema/:id" element={<CadastroTema />} />
             <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
             <Route path="/deletarTema" element={<DeletarTema />} />
            
             
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

    </Provider>
  );
}

export default App
