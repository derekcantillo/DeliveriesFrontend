import React from 'react';
import fotoregistro from '../images/registro.png';
import logo from '../images/domsmr logo.png';
import { Link } from 'react-router-dom';
const Register=()=>{
return(
   
        <div className="container" >
        
        <div className="card o-hidden border-0  my-5">
            <div className="card-body p-0">
                
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block ">
                        <img className="img-fluid img-register-register" src={fotoregistro}></img>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Registro de Usuario</h1>
                            </div>
                            <form className="user">
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="Nombres"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Apellidos"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Correo Electrónico"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repita Contraseña"/>
                                    </div>
                                </div>
                                <Link to="/" className="btn btn-primary btn-user btn-block">
                                    REGISTRARSE
                                </Link>
                                <hr></hr>
                                
                            </form>
                            
                           
                            <div className="text-center">
                            ¿Ya tienes cuenta?
                                <Link className="small" to="/"> Iniciar Sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    
);

};
export default Register;