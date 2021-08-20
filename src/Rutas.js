import { Switch, Route } from "react-router-dom";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";

import AddMensajeros from "./Pages/AddMensajeros";
import Inicio from "./Pages/Inicio";

import Domicilios from "./Pages/Domicilios";
import { AgregarDomicilioForm } from "./Components/AgregarDomicilio";
import HistorialDomiciliosMensajeros from "./Pages/HistorialDomisMensajeros";

const Rutas=()=>{
    return(
        <Switch>
            <Route  path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route exact path="/" component={Inicio}/>
      
            <Route path="/AddMensajeros" component={AddMensajeros}/>
            <Route path="/domicilios/" component={Domicilios} exact/>
            <Route path="/adddomicilio/mensajero/" component={AgregarDomicilioForm} exact/>
            <Route path="/domicilios/mensajero/:idMensajero" component={HistorialDomiciliosMensajeros} exact/>
        </Switch>
    );

};
export default Rutas;