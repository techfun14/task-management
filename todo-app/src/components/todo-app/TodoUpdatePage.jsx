import { useParams } from 'react-router-dom';
import './TodoUpdatePage.css';
import { useEffect, useState } from 'react';
import { deleteTodoForId, retrieveTodoApi, updateTodoApi } from './api/TodoApiService';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './security/Authcontext';
function TodoUpdateComponent(){
    const {id}=useParams();
    const authContext=useAuth();
    const username=authContext.usrname;
    const navigate=useNavigate(); 
    
    const[description,setdescription]=useState('');
    const[targetDate,setTargetDate]=useState('');
    const[isDone,setIsDone]=useState(false);

    useEffect(() => retrieveTodos(), [id]);
    function retrieveTodos(){
        retrieveTodoApi(username,id).then(response=>{
            setdescription(response.data.description);
            setTargetDate(response.data.targetDate);
            }) 
        .catch(error=>console.log(error))
    }
    function handleSubmit(e){
        e.preventDefault();
        const newTodo={
            id: parseInt(id), 
            username:username,
            description:description,
            targetDate:targetDate,
            done:isDone
        }
        updateTodoApi(username,id,newTodo).then((response)=>{
            console.log(response.data)
            navigate('/list-todos')  
        }).catch(error=>console.error("update Failed",error));
    }


    return(
        <div className="todo-update-container">
            <h1 > Enter Todo Details</h1>
            <div>
                <form className="todo-update-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>Description</label>
                    <input type="text" 
                    placeholder="Enter description"
                    onChange={(e)=>setdescription(e.target.value)}
                    value={description}
                    />
                    </div>

                    <div className="form-group">
                    <label>Target Date</label>
                    <input type="date"
                        value={targetDate}
                        onChange={(e)=>setTargetDate(e.target.value)} />
                    </div>

                    <div className="form-group checkbox-group">
                    <input 
                        type="checkbox" 
                        id="isDone"
                        checked={isDone}
                        onChange={(e) => setIsDone(e.target.checked)} 
                    />
                    <label htmlFor="isDone">Mark as Done</label>
                    </div>

                    <button type="submit" className="update-button" >Update</button>
                </form>
                
            </div>
        </div>
    );
}
export default TodoUpdateComponent;