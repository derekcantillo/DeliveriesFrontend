


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from './Rutas';
import '../src/css/estilos.css'
import Header from './Components/Header';
import { DomiciliosGlobalProvider } from './Contexts/DomiciliosGlobalState';
import Footer from './Components/Footer';
import React, {useState,useEffect, useContext} from 'react';
import authService from "./services/auth-service";
import Login from './Pages/Login';
import { AuthContext, AuthProvider } from './Contexts/AuthGlobalState';
function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
    useEffect(()=>{
        const user = authService.getCurrentUser();
        if (user){
            //setCurrentUser(user);
            setIsAuthenticate(true);
        }
    },[]);
    
    return (
        <Router>
       
        <DomiciliosGlobalProvider>
          <Header />
          <div className="container-fluid">
               {!isAuthenticate? <Login/>: <Rutas /> } 
              
         
         </div>
          <Footer />
          </DomiciliosGlobalProvider>
         
        </Router>
      );
}

export default App;
