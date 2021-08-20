import React, { createContext, useReducer } from 'react';

import DomiciliosReducer from './DomiciliosReducer';

const initialState = {
  domicilios: [
      
  ]
};

export const DomiciliosGlobalContext = createContext(initialState);

export const DomiciliosGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DomiciliosReducer, initialState);

  function setListaDomicilios(domicilios){
    dispatch({
        type: "SET_DOMICILIOS",
        payload: domicilios
      });
  }

  function addDomicilio(domicilio) {
    dispatch({
      type: "ADD_DOMICILIO",
      payload: domicilio
    });
  }

  function editDomicilio(domicilio) {
    dispatch({
      type: "EDIT_DOMICILIO",
      payload: domicilio
    });
  }

  function removeDomicilio(id) {
    dispatch({
      type: "REMOVE_DOMICILIO",
      payload: id
    });
  }

  return (
      <DomiciliosGlobalContext.Provider
        value={{
          setListaDomicilios,
          addDomicilio,
          editDomicilio,
          removeDomicilio,
          ...state
        }}
      >
         {children}
      </DomiciliosGlobalContext.Provider>
    
  );
};