import React, { useState, useEffect,useContext } from "react";
import { useHistory, Link } from 'react-router-dom';
import { DomiciliosGlobalContext } from '../Contexts/DomiciliosGlobalState';
import DomiciliosServices from '../services/DomiciliosServices';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
const HistorialDomiciliosMensajeros = (props) => {
    let history = useHistory();
    
    const currentMensajeroId = props.match.params.idMensajero;
    const {setListaDomicilios,domicilios} = useContext(DomiciliosGlobalContext);
    useEffect(() => {
      const mensajeroId = currentMensajeroId;
      DomiciliosServices.getAllDomiciliosByMensajeros(mensajeroId).then(response=>{
        setListaDomicilios(response.data);
  
      }).catch(e=>{});
      
    }, [currentMensajeroId]);
    
    return (
    
      
    <div>
    
    <div className="flex bg-white">
 
    <div className="content bg-light">
      <div className="container-fluid mt-5 p-5">
      <div class="page-header row no-gutters ">
          <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Dom Santa Marta</span>
            <h3 class="page-title">Sección Domicilios</h3>
          </div>
        </div>
        <div className="card card-small mb-3 shadow">
            <div className="card-header border-bottom">
                    <h6 className="m-0">Listado de Mensajeros</h6>
            </div>
            <div className="card-body m-4 ">
            <>
    <table className="table mt-2">
      <thead className="thead">
        <tr>
          <th>#</th>
          <th>Solicitante</th>
          <th>Estado</th>
         <th></th>
        </tr>
      </thead>
      <tbody>
        {domicilios.length > 0 ? (
          domicilios.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombreClienteOrigen}</td>
              <td>Undifined</td>
            
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No existen domicilios para el mensajero {currentMensajeroId}</td>
          </tr>
        )}
      </tbody>
    </table>
    </>
                
            </div>
        </div>
      
      </div>
   
    </div>
    </div>
    </div>
   
  );
};

export default HistorialDomiciliosMensajeros;