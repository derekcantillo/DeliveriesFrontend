import http from '../http-common'
import authHeader from './auth-header';
 const getAllMensajeros =()=>{
 return   http.get("/mensajeros", {headers:authHeader()});
}
 const getMensajero =(id)=>{
 return  http.get(`/mensajeros/${id}`, {headers:authHeader()});
}
 const createMensajero=(data)=>{
 return   http.post("/mensajeros", data, {headers:authHeader()});
}
 const updateMensajero=(id, data)=>{
 return   http.put(`/mensajeros/${id}`, data, {headers:authHeader()});
}
 const deleteMensajero=(id)=>{
    return http.delete(`/mensajeros/${id}`, {headers:authHeader()});
}
export default{
    getAllMensajeros, getMensajero, createMensajero, updateMensajero, deleteMensajero
};