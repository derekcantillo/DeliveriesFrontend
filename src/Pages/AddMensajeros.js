import React from 'react';

import Header from '../Components/Header';
import SideBar from '../Components/SideBar';

import ManejadorMensajeros from '../Components/ManejadorMensajeros';
import Footer from '../Components/Footer';
const AddMensajeros =()=>{
  
  
    return(
     
        <div className="content bg-light">
          <div className="container-fluid mt-5 p-5">
          <div class="page-header row no-gutters ">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Dom Santa Marta</span>
                <h3 class="page-title">Sección Mensajeros</h3>
              </div>
            </div>
          <ManejadorMensajeros/>
          </div>
       
        </div>
     
        
        
    );
};
export default AddMensajeros;