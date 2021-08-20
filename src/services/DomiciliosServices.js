import http from '../http-common'
import authHeader from './auth-header';
 const getAllDomicilios =()=>{
 return   http.get("/domicilios");
}
 const getAllDomiciliosByMensajeros =id=>{
 return  http.get(`/domicilios/mensajeros/${id}`, {headers:authHeader()});
}
 const createDomicilio=(id, data)=>{
 return   http.post(`/domicilios/mensajeros/${id}`, data, {headers:authHeader()});
}
 const updatedDomicilio=(id, data)=>{
 return   http.put(`/domicilios/${id}`, data, {headers:authHeader()});
}
 const deleteDomicilio=(id)=>{
    return http.delete(`/domicilios/mensajeros/${id}`, {headers:authHeader()});
}
export default{
    getAllDomicilios, getAllDomiciliosByMensajeros, createDomicilio, updatedDomicilio, deleteDomicilio
};