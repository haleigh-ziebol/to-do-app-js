import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'

function List (props) {
    let [taskArray, setTaskArray] = useState([]);
    
    //fetch tasks from DB
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

    //runs fetchTasks
    useEffect(() => {
        fetchTasks(); //run when page loads
        if(props.newTask) //run when new task added
        fetchTasks();
    }, [props.newTask])

    //delete task
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

    //checking box feature
    const completeTask = (evt) => {
        const id = evt.currentTarget.parentElement.id
        if(evt.currentTarget.parentElement.className =="task-unchecked") {
            evt.currentTarget.parentElement.className = "task-checked";
        }
        else {
            evt.currentTarget.parentElement.className = "task-unchecked";
        }
        axios.put(`/todo/${id}`)
        .then((response) => {
            console.log(response);
            fetchTasks();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //extract date from number and report year if different than current
    const dateFormat = (prop) => {
        const d = new Date();
        let year = String(d.getFullYear());
        let monthList = [ "placeholder", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let taskDate = String(prop).slice(0,10).split("-");
        taskDate[1] = Number(taskDate[1])
        if (year == taskDate[0]){
            return (monthList[taskDate[1]] +" "+ taskDate[2]);
        }
        else {
            return (monthList[taskDate[1]] +" "+ taskDate[2] + ", " + taskDate[0]);
        }
    }

    return (
        <section className="list">
                {taskArray.map(task => 
                    (task.complete == false) ?
                        (<div className ="task-unchecked" id={task.id} key={task.id}> 
                            <input type="checkbox" onChange={completeTask} unchecked/>
                            <div><h1>{task.name}</h1></div>
                            <div><h1>{dateFormat(task.duedate)}</h1></div>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    :
                        (<div className ="task-checked" id={task.id} key={task.id}> 
                            <input type="checkbox" onChange={completeTask} checked/>
                            <div><h1><strike>{task.name}</strike></h1></div>
                            <div><h1><strike>{dateFormat(task.duedate)}</strike></h1></div>
                            <button onClick={deleteTask}>Delete Task</button>
                        </div>)
                    )}

        </section>
    );

}

export default List;