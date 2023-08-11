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
        const id = evt.currentTarget.id
        console.log(id)
        axios.delete(`/todo/${id}`)
        .then(() => {
            fetchTasks();
        }).catch((error) => {
          console.log(error);
        });
    }

    const

    return (
        <section>
                {taskArray.map(task => 
                    (<div className ="task"> 
                         <input type="checkbox" onClick={changeFormat}/>
                        <h1>Task: {task.name};    due: {task.duedate}</h1>
                        <button onClick={deleteTask} id={task.id}>Delete Task</button>
                    </div>))}
        </section>
    );

}

export default List;