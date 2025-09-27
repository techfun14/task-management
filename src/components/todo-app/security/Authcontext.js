//Create a context
// put some state in context 
// share context with other components

import { createContext, useState,useContext } from "react";
import { executeBasicAuthenticationService } from "../api/TodoApiService";
import { apiClient } from "../api/apiClient";

export const AuthContext=createContext();
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}){
    const[isAuthenticated,setAuthenticated]= useState(false);
    const[usrname,setUsrname]= useState("")
    const [token,setToken]= useState(null);

    async function login(username,password){
        const baToken='Basic '+ window.btoa(username+':'+password)
        try{
        const response=await executeBasicAuthenticationService(baToken)

        
        if (response.status === 200) {
            setAuthenticated(true)
            setUsrname(username)
            setToken(baToken)
            apiClient.interceptors.request.use(
                config => {
                config.headers.Authorization = baToken;
                return config;
            });
            return true;
        } else {
                logout()
                return false;
            }
        }catch(error){
            logout()
            return false;
        } 
    }


    // function login(username,password){
    //         if (username === "utkarsh" && password === "1234") {
    //             setAuthenticated(true)
    //             setUsrname(username)
    //             return true;
    //         } else {    
    //             setAuthenticated(false)
    //             setUsrname(null);
    //             return false;
    //         }
    // }
    function logout(){
        setAuthenticated(false)
        setToken(null);
        setUsrname(null);
    }
    

    return(
        <AuthContext.Provider value={{isAuthenticated,usrname,login,logout,token}}>
            {children}
        </AuthContext.Provider>
    );
}