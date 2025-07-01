import { useState ,useEffect} from "react";
import { deleteTodoForId, retrieveAllTodosForUsername } from "./api/TodoApiService";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { useAuth } from "./security/Authcontext";
import './ListTodospage.css';
import { useNavigate } from "react-router-dom";

function ListTodos(){
    const navigate=useNavigate();
    const today= new Date();
    const targetDate= new Date(today.getFullYear()+12,today.getMonth(),today.getDate());
    const[todos,setTodos]= useState([]);
    const[message,setMessage]=useState(null);
    const authContext =useAuth();
    const username=authContext.usrname;

    // const todos=[
    //     // {id:1,description:'learn javascript',isDone:true,targetDate:targetDate},
    //     // {id:2,description:'learn fullstack java',isDone:false,targetDate:targetDate},
    //     // {id:3,description:'learn React',isDone:false,targetDate:targetDate}
    // ]

    function refreshTodos(){
         retrieveAllTodosForUsername(username).then(
            response => {console.log(response)
            setTodos(response.data)
            }
        ) 
        .catch(error=>console.log(error))
    }  
    useEffect(() => {
        refreshTodos(); 
    }, [] );


    function deleteTodo(id,description){
        deleteTodoForId(username,id).then(
            ()=>{
                setMessage(`Delete of todo  " ${description}" successfull`)
                refreshTodos()
            }
        
        ).catch(error)
    }

    return (
        <div className="todo-container0">
            <div className="todo-container">
                <h1 className="page-title">📋 Your Todos</h1>
                
                {message && <div className="alert-msg">{message}</div>}

                <div className="todo-table-wrapper">
                <table className="todo-table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos?.map((todo) => (
                        <tr key={todo?.id}>
                        <td>{todo?.description || "N/A"}</td>
                        <td>{todo?.isDone ? "✅ Done" : "❌ Pending"}</td>
                        <td>
                            {todo?.targetDate
                            ? new Date(todo.targetDate).toDateString()
                            : "N/A"}
                        </td>
                        <td>
                            <button
                            className="btn btn-delete"
                            onClick={() => deleteTodo(todo?.id,todo?.description)}
                            >
                            Delete
                            </button>
                        </td>
                        <td>
                            <button
                            className="btn btn-update"
                            onClick={() => navigate(`/list-todos/${todo.id}`)}
                            >
                            Update
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="add-todo-btn" onClick={()=>navigate('/add-todos')}> Create New Task</button>
                </div>
            </div>
        </div>
    );
}
export default ListTodos;