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

    return (
        <section>
            <ul>
                {taskArray.map(task => (<div id={task.id}>Task: {task.name} is due: {task.duedate}</div>))}
            </ul>
        </section>
    );

}

export default List;