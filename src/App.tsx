import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/paginas/home/Home';
import Login from './assets/paginas/login/Login';


function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
              <div style={{minHeight:'100vh'}}>

              <Routes exact path='/'>
                    < Login />
                </Route>

              <Route path='/login'>
                    < Login />
                </Route>

                <Route path='/home'>
                    < Home />
                </Routes>
              </div>
          </Switch>

        <Footer />
    </Router>
  );
}

export default App
