import React, { useState,useEffect } from "react";

import AgregarMensajeroForm from "./AgregarMensajeroForm";
import EditarMensajeroForm from "./EditarMensajeroForm";
import MensajerosServices from "../services/MensajerosServices";
import TablaMensajeros from "./TablaMensajeros";

const ManejadorMensajeros = () => {
  const estadoInicialMensajeros = [];
  const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(estadoInicialMensajeros);
  
  const estadoInicialFormularioEdicion = {
    id: null,
    nombre: "",
    direccion: "",
    telefono: "",
    licencia:""
  };
  const [mensajeroEditar, setMensajeroEditar] = useState(estadoInicialFormularioEdicion );
  const [modoEdicion, setModoEdicion] = useState(false);
  
  useEffect(() => {
    recuperarMensajeros();
  }, []);

  const recuperarMensajeros = ()=>{
    MensajerosServices.getAllMensajeros()
    .then(response => {
      setEstadoListaMensajeros(response.data);
     
    })
    .catch(e => {
      
    });
  }
 

  const editarMensajero = (mensajero) => {
    setModoEdicion(true);
    setMensajeroEditar({
      id: mensajero.id,
      nombre: mensajero.nombre,
      direccion: mensajero.direccion,
      telefono: mensajero.telefono,
      licencia: mensajero.licencia
    });
  };
  const eliminarMensajero = (id) => {
    MensajerosServices.deleteMensajero(id)
      .then(response => {
        if(response.status === 204){
          const mensajerosSinValorEliminado = estadoListaMensajeros.filter(
            (mensajero) => mensajero.id !== id
          );
      
          setEstadoListaMensajeros(mensajerosSinValorEliminado);
        }
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });

    
  };
  const agregarMensajero = (mensajero) => {
    
    MensajerosServices.createMensajero(mensajero)
      .then(response => {
        const nuevoMensajero = {
            id:response.data.id,
            nombre:response.data.nombre,
            direccion: response.data.direccion,
            telefono: response.data.telefono,
            licencia: response.data.licencia

        };
        setEstadoListaMensajeros([...estadoListaMensajeros, nuevoMensajero]);

        
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
 
  };
  const actualizarMensajero = (id, mensajeroActualizado) => {
    setModoEdicion(false);
    MensajerosServices.updateMensajero(id, mensajeroActualizado)
      .then(response => {
        const mensajerosConElActualizado = estadoListaMensajeros.map(
          (mensajero) => mensajero.id === id ? mensajeroActualizado : mensajero
        );
        setEstadoListaMensajeros(mensajerosConElActualizado);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

    
  };

  

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
        
        <TablaMensajeros
          mensajeros={estadoListaMensajeros} 
          eliminar={eliminarMensajero} 
          editar={editarMensajero} 
        />
        
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        {!modoEdicion ? (
         
           
            <AgregarMensajeroForm agregarMensajero={agregarMensajero} />
       
        ) : (
         
            <EditarMensajeroForm
              mensajeroAEditar={mensajeroEditar}
              modoEdicion={setModoEdicion}
              actualizar={actualizarMensajero}
            />
         
        )}
      </div>
    </div>
  );
};

export default ManejadorMensajeros;
