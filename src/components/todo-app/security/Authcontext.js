//Create a context
// put some state in context 
// share context with other components

import { createContext, useState,useContext } from "react";

export const AuthContext=createContext();
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}){
    const[isAuthenticated,setAuthenticated]= useState(false);
    const[usrname,setUsrname]= useState("")

    function login(username,password){
            if (username === "utkarsh" && password === "1234") {
                setAuthenticated(true)
                setUsrname(username)
                return true;
            } else {    
                setAuthenticated(false)
                setUsrname(null);
                return false;
            }
    }
    function logout(){
        setAuthenticated(false)
    }
    

    return(
        <AuthContext.Provider value={{isAuthenticated,usrname,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}