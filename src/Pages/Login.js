import React, { useContext, useState} from 'react';
import { useHistory } from 'react-router';
import fotoregistro from '../images/registro.png';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthGlobalState';
import authService from '../services/auth-service';

const Login=(props)=>{
    let history = useHistory();
    const initialFormState = {
        username:null,
        password: null,
        isSubmitting:false,
        errorMessage: null
    }
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = ev =>{
        setFormData(
           {
               ...formData,
               [ev.target.name]:ev.target.value
           } 
        );
    }
    const handleFormSubmit = ev =>{
        ev.preventDefault();
        setFormData(
            {
                ...formData,
                isSubmitting:true
            } 
         );
         authService.login(formData.username, formData.password)
         .then(
             (data)=>{
                setFormData(
                    {
                        ...formData,
                        isSubmitting:false
                    } 
                 );
                 history.push("/domicilios");
                window.location.reload();
             },(error)=>{
                setFormData(
                    {
                        ...formData,
                        isSubmitting:false,
                        errorMessage:'Usuario y/o Contraseña incorrectos'
                    } 
                 );
             }
         );
    };
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card border-0 my-5 ">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                            <img className="img-fluid" src={fotoregistro}></img>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="col-lg-6 ">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">
                                            Inicio de Sesión
                                        </h1>
                                    </div>
                                    <form className="user" onSubmit={handleFormSubmit}>
                                        <div className="form-group">
                                            <input type="username" className="form-control form-control-user" id="username" 
                                            placeholder="Username..."  name="username" value={formData.username}
                                            onChange={handleInputChange} ></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user" id="password" placeholder="Password"
                                           name="password" value={formData.password} onChange={handleInputChange}></input>
                                        </div>
                                        
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block" disabled={formData.isSubmitting}>
                                            { formData.isSubmitting && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>Login</span>
                                            </button>
                                        </div>
                                        {formData.errorMessage && (<div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {formData.errorMessage}
                                            </div>
                                        </div>)}
                       
                                    </form>
                                    <hr></hr>
                                    <div className="text-center">
                                        <a className="small" href="#"> Olvidé mi contraseña</a>

                                    </div>
                                    <div className="text-center">
                                        ¿No tienes cuenta?
                                        <Link to="/Register"className="small" href="#">Crear Mi Cuenta</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Login;