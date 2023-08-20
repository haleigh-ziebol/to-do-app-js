import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'

function List () {
    let [taskArray, setTaskArray] = useState([]);
    
    const fetchTasks = () => {
        axios.get('/todo')
        .then((response) =>{
          console.log(response.data);
          setTaskArray(response.data);
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

    //extract date from number
    const dateFormat = (prop) => {
        let monthList = [ "placeholder", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let date = String(prop).slice(0,10).split("-");
        return (monthList[date[1]] +" "+ date[2] + ", " + date[0]);
    }

    return (
        <section className="list">
                {taskArray.map(task => 
                    (task.complete == false) ?
                        (<div className ="task-unchecked" id={task.id} key={task.id}> 
                            <input type="checkbox" onClick={completeTask} unchecked/>
                            <div><h1>{task.name}</h1></div>
                            <div><h1>{dateFormat(task.duedate)}</h1></div>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    :
                        (<div className ="task-checked" id={task.id} key={task.id}> 
                            <input type="checkbox" onClick={completeTask} checked/>
                            <div><h1><strike>{task.name}</strike></h1></div>
                            <div><h1><strike>{dateFormat(task.duedate)}</strike></h1></div>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    )}

        </section>
    );

}

export default List;