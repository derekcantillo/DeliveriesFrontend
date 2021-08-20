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
  
    
  
 
    <div className="content bg-light cbg pb-2">
      <div className="container-fluid ">
      <div class="page-header row no-gutters ">
          <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Dom Santa Marta</span>
            <h3 class="page-title">Sección Domicilios</h3>
          </div>
        </div>
        <div className="card card-small shadow card-table mb-5">
            <div className="card-header border-bottom">
                    <h6 className="m-0">Domicilios</h6>
            </div>
            <div className="card-body ">
            <>
    <table className="table ">
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
                
                <button onClick={openModal} className="btn btn-primary details ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg></button>
                <div className="topbar-divider d-none d-sm-block"></div>
                {!d.estado ?(
                <button onClick={()=>closeDomicilio(d.id, d)} className="btn btn-danger btn-sm status">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                </svg></button>
                ):(
                  <button className="btn btn-secondary btn-sm" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></button>
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
 
   
    
  );
};

export default Domicilios;
