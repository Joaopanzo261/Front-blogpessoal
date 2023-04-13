import { useState } from 'react'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
   
    </>
  );
}

export default App
