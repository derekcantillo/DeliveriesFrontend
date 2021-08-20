import React, { useState, useEffect,useContext } from "react";
import { useHistory, Link } from 'react-router-dom';
import { DomiciliosGlobalContext } from '../Contexts/DomiciliosGlobalState';
import DomiciliosServices from '../services/DomiciliosServices';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import ModalComponent from "../Components/ModalComponent";

const Domicilios = (props) => {
  const [show, setShow]=useState(false);  

  const closeModal=()=>setShow(false);
  const openModal=()=>setShow(true);

  const {setListaDomicilios,domicilios} = useContext(DomiciliosGlobalContext);
  
  const closeDomicilio=(id, domicilio)=>{
    console.log(id);
    DomiciliosServices.updatedDomicilio(id, {...domicilio, estado:true}).then(response =>{
      console.log(response.data)
      const newDomicilios = domicilios.map(d => {
      if(d.id === response.data.id){
        return response.data
      }
      return d
  })
  setListaDomicilios(newDomicilios)
  console.log(newDomicilios)
})
  
  }
  
  useEffect(() => {
    
    DomiciliosServices.getAllDomicilios().then(response=>{
      setListaDomicilios(response.data);

    }).catch(e=>{});
    
  }, []);
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
          domicilios.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.nombreClienteOrigen}</td>
              {!d.estado ?(
                <td className=" status">
                 
                  Pendiente
                     
                </td>
              ):(
                <td>Cerrado</td>
              )}
             
            
              <td>
                <div className="row">
                
                <button onClick={openModal} className="btn btn-primary ">Detalles</button>
                <div className="topbar-divider d-none d-sm-block"></div>
                {!d.estado ?(
                <button onClick={()=>closeDomicilio(d.id, d)} className="btn btn-danger btn-sm">Cerrar Estado</button>
                ):(
                  <button className="btn btn-secondary btn-sm" disabled>Cerrar Estado</button>
                )}
               
                </div>
                

                <ModalComponent show={show}
                  closeModal={closeModal}
                  domicilio={d}

                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No existen domicilios</td>
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

export default Domicilios;
