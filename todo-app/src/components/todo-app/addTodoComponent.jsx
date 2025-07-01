
import {useState} from 'react';

import { useAuth } from './security/Authcontext';
import { addTodoApi } from './api/TodoApiService';
import { useNavigate } from 'react-router-dom';

function TodoAddUpdateComponent(){
    const navigate=useNavigate()
    const[description,setDescription]=useState('');
    const[targetDate,setTargetDate]=useState('');
    const authContext=useAuth();
    const username=authContext.usrname;
    

    function handleSubmit(e){
        e.preventDefault(); // Prevent page reload
        const newTodo = {
        username:username,
        description: description,
        targetDate: targetDate,
        done: false
        };
        addTodoApi(username,newTodo).then(
            response => {
                console.log("Todo added:", response.data);
            })
            .catch(error => {
    console.error("Failed to add todo:", error);
  });
    }
    return(
        <div className="todo-update-container">
            <h1 > Add Todo Details</h1>
            <div>
                <form className="todo-update-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>Description</label>
                    <input type="text" 
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>

                    <div className="form-group">
                    <label>Target Date</label>
                    <input type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)} 
                    />
                     
                    </div>

                    <button type="submit" className="update-button" onClick={()=>navigate('/list-todos')}>Add- Todo</button>
                </form>
                
            </div>
        </div>
    );
}export default TodoAddUpdateComponent;