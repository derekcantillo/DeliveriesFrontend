import React, { useState } from "react";

const AgregarMensajeroForm = (props) => {
  const estadoInicialFormulario = {
    id: null,
    nombre: "",
    correo: "",
    numLicencia:"",
    numeroContacto: ""
  };
  const [estadoFormularioMensajero,cambiarEstadoFormularioMensajero ] = useState(estadoInicialFormulario);

  const gestionarCamposFormulario = (event) => {
    const { name, value } = event.target;
    cambiarEstadoFormularioMensajero({
      ...estadoFormularioMensajero,
      [name]: value
    });
  };
  return (
    <div className="card card-small mb-3 shadow">
       <div className="card-header border-bottom">
                <h6 className="m-0">Agregar Mensajero</h6>
        </div>
         <form className="card-body p-4 " onSubmit={(event) => {
        event.preventDefault();
        if (
          !estadoFormularioMensajero.nombre ||
          !estadoFormularioMensajero.correo ||
          !estadoFormularioMensajero.numeroContacto ||
          !estadoFormularioMensajero.numLicencia 
        )
          return;
        props.agregarMensajero(estadoFormularioMensajero);
        cambiarEstadoFormularioMensajero(estadoInicialFormulario);
      }}>
      <div className="">

      </div>
      <div className="form-group row">
        <div className="col-12">
        <label>Nombre Completo</label>
        <input
          id="nombre"
          className="form-control"
          type="text"
          name="nombre"
          placeholder="Nombres"
          value={estadoFormularioMensajero.nombre}
          onChange={gestionarCamposFormulario}/>
        </div>
      </div>


      <div className="form-group row">
        
        <div className="col-5">
        <label>Tipo Doc.</label>
        <select type="text" className="form-control form-select form-select-sm" >
                    <option selected>Selecciona un tipo de documento</option>
                    <option >C.C</option>
                    <option >T.I</option>
                    <option >NIT</option>
                    <option >C.E</option>
                    <option >Pasaporte</option>
                    <option >P.E.P</option>
          </select>
                                    
        </div>
        <div className="col-7">
        <label>Numero Licencia</label>
        <input
          id="numLicencia"
          className="form-control"
          type="text"
          name="numLicencia"
          value={estadoFormularioMensajero.numLicencia}
          onChange={gestionarCamposFormulario}/>
      </div>
      </div>
      <div className="form-group row">
        <div className="col-5">
        <label>Teléfono</label>
        <input
          id="numeroContacto"
          className="form-control"
          type="text"
          name="numeroContacto"
          value={estadoFormularioMensajero.numeroContacto}
          onChange={gestionarCamposFormulario}/>
        </div>
        
        <div className="col-7">
        <label>Correo Electrónico</label>
        <input
          id="correo"
          className="form-control"
          type="correo"
          name="correo"
          value={estadoFormularioMensajero.correo}
          onChange={gestionarCamposFormulario} />
        </div>
        
      </div>
      <div className="form-group">
        <label>Dirección</label>
        <input
          id="direccion"
          className="form-control"
          type="text"
          name="direccion"
           />
      </div>
      
      
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Agregar
        </button>
      </div>
    </form>
    </div>
   
  );
};

export default AgregarMensajeroForm;
