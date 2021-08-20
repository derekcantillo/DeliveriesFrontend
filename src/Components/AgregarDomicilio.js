import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { DomiciliosGlobalContext } from '../Contexts/DomiciliosGlobalState';
import DomiciliosServices from '../services/DomiciliosServices';
import MensajerosServices from '../services/MensajerosServices';
export const AgregarDomicilioForm = (props)=>{
    let history = useHistory();
    const { addDomicilio } = useContext(DomiciliosGlobalContext);
    const initialStateForm = {
        id:null,
        valor: null,
        direccionOrigen: null,
        direccionDestino: null,
        nombreClienteOrigen: null,
        nombreClienteDestino: null,
        mensajero:null
    }
    
    const [domicilioFormState, setDomicilioFormState] = useState(initialStateForm);
    const estadoInicialMensajeros = [];
    const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(
      estadoInicialMensajeros
    );
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setDomicilioFormState({
          ...domicilioFormState,
          [name]: value
        });
      };

      const handleOpcion =(event)=>{
        const opcion = event.target.value;
        console.log(opcion);
      };
     
      useEffect(() => {
        retrieveMensajeros();
      }, []);
    
      const retrieveMensajeros = ()=>{
        MensajerosServices.getAllMensajeros()
        .then(response => {
          setEstadoListaMensajeros(response.data);
          setDomicilioFormState({
            ...domicilioFormState, mensajero:response.data[0].id
          })
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
      

      const executeSubmit = (ev)=>{
        console.log(domicilioFormState.mensajero);
          ev.preventDefault();
          DomiciliosServices.createDomicilio(domicilioFormState.mensajero, domicilioFormState).then(response=>{
            addDomicilio(response.data);
            history.push("/domicilios/");
          }).catch(e=>{
          
          });
      }

      

      return (
          
            
          <div>
          
          <div className="flex bg-white">
        
          <div className="content bg-light  ">
            <div className="container-fluid mt-2 " id="form-domi">
            <div class="page-header row no-gutters ">
                <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <span class="text-uppercase page-subtitle">Dom Santa Marta</span>
                  <h3 class="page-title">Sección Agregar Domicilios</h3>
                </div>
              </div>
              
        <div className="card card-small mb-3 shadow">
        <div className="card-header border-bottom">
                <h6 className="m-0">Agregar Domicilios</h6>
        </div>
        <form className="card-body p-4 " onSubmit={executeSubmit}>
        <div className="card-header border-bottom text-center">
                <h5 className="m-0">Cliente Origen</h5>
        </div>
        <div className="form-group row">
            <div className="col-6">
            <label>Nombre Cliente</label>
            <input id="nombreClienteOrigen" className="form-control" type="text" name="nombreClienteOrigen" placeholder="Nombres" value={domicilioFormState.nombreClienteOrigen}  onChange={handleOnChange}/>
            </div>
            <div className="col-6">
            <label>Direccion</label>
            <input id="direccionOrigen" className="form-control" type="text" name="direccionOrigen" placeholder="Ingresa dirección..." value={domicilioFormState.direccionOrigen}  onChange={handleOnChange}/>
            </div>
      </div>
     
            
            
      
      <div className="form-group row">
            <div className="col-4">
            <label>Celular</label>
            <input id="nombre" className="form-control" type="text" name="nombre" placeholder="Celular"  />
            </div>
            <div className="col-4">
            <label>Fecha Domicilio</label>
            <input id="nombre"className="form-control" type="date" name="nombre"/>
            </div>
            <div className="col-4">
            <label>Hora Recoger</label>
            <input id="nombre" className="form-control" type="time" name="nombre"/>
            </div>
      </div>
      <div className="card-header border-bottom text-center">
                <h5 className="m-0">Cliente Destino</h5>
        </div>
        <div className="form-group row">
            <div className="col-6">
            <label>Nombre Cliente</label>
            <input id="nombreClienteDestino" className="form-control" type="text" name="nombreClienteDestino" placeholder="Nombres" value={domicilioFormState. nombreClienteDestino}  onChange={handleOnChange}/>
            </div>
            <div className="col-6">
            <label>Direccion</label>
            <input id="direccionDestino" className="form-control" type="text" name="direccionDestino" placeholder="Direccion" value={domicilioFormState. direccionDestino}  onChange={handleOnChange}/>
            </div>
      </div>
     

      <div className="form-group row">
            <div className="col-6">
            <label>Celular</label>
            <input  id="nombre" className="form-control" type="text" name="nombre" placeholder="Celular" />
            </div>    
            
      </div>
      <div className="card-header border-bottom text-center">
                <h5 className="m-0">Información de Entrega</h5>
        </div>
      
        <div class="form-row">
             <div class="form-group col-md-12">
                <label for="feDescription">Descripción del Paquete</label>
                    <textarea className=" form-control form-control-des" name="feDescription" rows="2" placeholder="Describa claramente detalles del domicilio"></textarea>
             </div>
        </div>

        <div className="form-group row">
          <div className="col-6">
          <label>Mensajeros:</label>
             <select  name="mensajero"className="form-control form-select form-select-sm" value={domicilioFormState.mensajero} onChange={handleOnChange}>
              {estadoListaMensajeros.map((m)=>(
                <option key={m.id} value={m.id}>{m.nombre}</option>
              ))}
           
                                            
            </select>
              </div>                     
           <div>
           <label>Valor Domicilio</label>

<input id="valor" className="form-control" type="text" name="valor" placeholder="$$$$$" value={domicilioFormState.valor}  onChange={handleOnChange}></input>
           </div>
                                
                               
       
       
           
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg> Hacer Domicilio
        </button>
        <Link
          className="btn btn-secondary m-1"
          to="/Domicilios"
        >
          Cancelar
        </Link>
      </div>
        </form>
            </div>
          </div>
          </div>
          </div>
          </div>
      );

}