
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import AuthService from '../services/auth-service'
const Header=()=>{

    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(()=>{
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  },[]);
  const logout = ()=>{
    AuthService.logout();
  }
    return(

        
        <div className="container-fluid">
                <header className="header">
            <div className="navbar bg-white p-0 overflow-hidden  row">
            <div className="logo ml-5">
                <span className="logo">DomSantaMarta</span>
            </div>
            
            <div className="navbar navbar-expand-lg   ">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
        
        <li className="nav-item">
            <Link className="nav-link " to="/domicilios">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
            Domicilios</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to="/AddMensajeros">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            Mensajeros</Link>
        </li>
            
            {currentUser?(<>
        
          <a className="py-2 px-2 text-dark text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
              {currentUser.username}</a>
         
          <button class="py-2 btn btn-link btn-sm btn-logout" href="/login" onClick={logout}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg> </button>
          
         
        </>):(<>
          <Link to="/login"> Login</Link>
        </>)}
           
                        
                </ul>
            </div>


            
        </div>
        
        <div class="px-3 py-2 border-bottom mb-3 hb">
      <div class="container d-flex flex-wrap justify-content-end ml-auto">

        <div class="text-end">
          
          <Link  to="/adddomicilio/mensajero/"type="button" class="btn btn-primary  btn-domi">Nuevo Domicilio</Link>
        </div>
      </div>
    </div>
        </header>
        </div>
        
        
        
    );
};
export default Header;