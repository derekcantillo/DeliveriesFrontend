import React, {useReducer,createContext} from 'react';
import { AuthReducer } from './AuthReducer';


const initialState = {
    isAuthenticate:false,
    user:null
}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer,initialState);

    function login (user){
        dispatch({type:'LOGIN',payload:user});
    }
    function logout(){
        dispatch({type:'LOGOUT'});
    }

    return (<AuthContext.Provider
        value={
            {login,
            logout,
            ...state}
        }>
             {children}
           
            </AuthContext.Provider>
        
        
        );
};
