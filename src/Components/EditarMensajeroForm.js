import React, { useState, useEffect } from "react";

const EditarMensajeroForm = (props) => {
  const [mensajero, setMensajero] = useState(props.mensajeroAEditar);
  
  useEffect(() => {
    setMensajero(props.mensajeroAEditar);
  }, [props]);

  const gestionarCamposFormulario = (event) => {
    const { name, value } = event.target;
    setMensajero({
      ...mensajero,
      [name]: value
    });
  };
  const accionBotonActualizar = (event) => {
    event.preventDefault();
    props.actualizar(mensajero.id, mensajero);
  };
  return (
    <div className="card card-small mb-3 shadow">
      <div className="card-header border-bottom">
                <h6 className="m-0">Editar Mensajero</h6>
        </div>
         <form className="card-body p-4 " onSubmit={accionBotonActualizar}>

         <div className="form-group row">
        <div className="col-12">
        <label>Nombre Completo</label>
        <input
          id="nombre"
          className="form-control"
          type="text"
          name="nombre"
          placeholder="Nombres"
          value={mensajero.nombre}
          onChange={gestionarCamposFormulario}/>
        </div>
        
      </div>


      <div className="form-group row">
        
        <div className="col-5">
        <label>Tipo Doc.</label>
        <select type="text" className="form-control form-select form-select-sm" value={mensajero.tipodoc}>
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
          value={mensajero.numLicencia}
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
          value={mensajero.numeroContacto}
          onChange={gestionarCamposFormulario}/>
        </div>
        
        <div className="col-7">
        <label>Correo Electrónico</label>
        <input
          id="correo"
          className="form-control"
          type="correo"
          name="correo"
          value={mensajero.correo}
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
          value={mensajero.direccion}
          onChange={gestionarCamposFormulario} />
      </div>



      <div className="form-group">
        <button type="submit" className="btn btn-success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg> Aplicar Cambios
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={(ev) => props.modoEdicion(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
    </div>
   
  );
};

export default EditarMensajeroForm;
