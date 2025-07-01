import axios from "axios";
const apiClient=axios.create({baseURL:'http://localhost:9090'});

// Response to preflight 
// request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
export const retrieveAllTodosForUsername=(username)=>apiClient.get(`/users/${username}/todos`,{
    headers:{
        Authorization:'Basic dXRrYXJzaDoxMjM0'
    }
})
export const deleteTodoForId=(username,id)=>apiClient.delete(`users/${username}/todos/${id}`)
export const retrieveTodoApi=(username,id)=>apiClient.get(`users/${username}/todos/${id}`);
export const addTodoApi=(username,todo)=>apiClient.post(`users/${username}/todos`,todo);
export const updateTodoApi=(username,id,todo)=>apiClient.put(`users/${username}/todos/${id}`,todo)