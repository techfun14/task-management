
import { apiClient } from "./apiClient";

// Response to preflight 
// request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
export const retrieveAllTodosForUsername=(username,token)=>apiClient.get(`/users/${username}/tasks`,{
    headers:{
        Authorization:token
    }
})
export const deleteTodoForId=(username,id,token)=>apiClient.delete(`users/${username}/tasks/${id}`,{
    headers:{
        Authorization:token
    }
})
export const retrieveTodoApi=(username,id,token)=>apiClient.get(`users/${username}/tasks/${id}`,{
    headers:{
        Authorization:token
    }
});
export const addTodoApi=(username,todo,token)=>apiClient.post(`users/${username}/tasks`,todo,{
    headers:{
        Authorization:token
    }
});
export const updateTodoApi=(username,id,todo,token)=>apiClient.put(`users/${username}/tasks/${id}`,todo,{
    headers:{
        Authorization:token
    }
});

export const executeBasicAuthenticationService =(token)=>
     apiClient.get('/basicauth',{
        headers:{
            Authorization:token
        }
    });
