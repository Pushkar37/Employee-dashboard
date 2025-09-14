import React, { createContext } from 'react'
import { getLocalStorage } from '../../utils/LocalStorage';
import  { useState,useEffect } from 'react'


export const Authcontext=createContext();

export const AuthProvider = ({children}) => {
  const [userdata, setUserdata] = useState([])
  useEffect(() => {
   const {employees,admin}=getLocalStorage();
 
    setUserdata({employees,admin});
  
   
  },[])
  
  
 
  return (
    <div>
      <Authcontext.Provider value={userdata}>

      {children}
      </Authcontext.Provider >
      </div>
  )
}
