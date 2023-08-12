import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'

function List () {
    let [taskArray, setTaskArray] = useState([]);
    
    const fetchTasks = () => {
        axios.get('/todo')
        .then((response) =>{
          console.log(response.data);
          setTaskArray(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
      
    useEffect(() => {
        fetchTasks();
    }, [])

    const deleteTask = (evt) => {
        const id = evt.currentTarget.parentElement.id
        console.log(id)
        axios.delete(`/todo/${id}`)
        .then(() => {
            fetchTasks();
        }).catch((error) => {
          console.log(error);
        });
    }

    const completeTask = (evt) => {
        const id = evt.currentTarget.parentElement.id
        console.log(id)
        if(evt.currentTarget.parentElement.className =="task-unchecked") {
            evt.currentTarget.parentElement.className = "task-checked"
        }
        else {
            evt.currentTarget.parentElement.className = "task-unchecked"
        }
        axios.put(`/todo/${id}`)
        .then((response) => {
            console.log(response);
        List;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <section className="list">
                {taskArray.map(task => 
                    (task.complete == false) ?
                        (<div className ="task-unchecked" id={task.id}> 
                            <input type="checkbox" onClick={completeTask} unchecked/>
                            <h1>Task: {task.name}</h1> <h1>due: {task.duedate}</h1>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    :
                        (<div className ="task-checked" id={task.id} checked> 
                            <input type="checkbox" onClick={completeTask}/>
                            <h1><strike>Task: {task.name}</strike></h1> <h1><strike>due: {task.duedate}</strike></h1>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    )}

        </section>
    );

}

export default List;