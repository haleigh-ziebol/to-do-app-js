import React, {useState} from 'react';
import axios from 'axios';
import './Modal.css';

function Modal (props) {
    let [taskName, setTaskName] = useState(props.modeStatus == 'edit'? props.taskToEdit.name : ''); //sets initial value of taskName to edited task's if in edit mode 
    let [taskDuedate, setTaskDuedate] = useState(props.modeStatus == 'edit'? props.taskToEdit.duedate : ''); //sets initial value of taskDuedate to edited task's if in edit mode 

    //addTask to DB and list
    const addTask = (evt) => {
        evt.preventDefault();
        console.log(`The task is ${taskName} and the duedate is ${taskDuedate}`);
        axios.post('/todo', {name: taskName, duedate: taskDuedate})
        .then((response) => {
            console.log(response);
            evt.target.reset();
            props.setNewTask(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //editTask in DB and list
    const editTask = () => {
        axios.put(`/todo/edit/${props.taskToEdit.id}`, {id: props.taskToEdit.id, name: taskName, duedate: taskDuedate})
        .then(() => {
            console.log(response);
        }).catch((error) => {
          console.log(error);
        });
    }

    //change input


  return (
      <div className="modal-container">
        <div className="modal">
            <div className="form-title">
                <h3>Time to {props.modeStatus} your task</h3>
                <button onClick={() => (props.modeStatus == 'create')?(props.setShow(false)): (props.setOpenEdit(false))}>X</button>
            </div>
            <form id="form" onSubmit={props.modeStatus =='edit' ? editTask : addTask}className="form">
                <label htmlFor="name-input">Task:</label>
                <input id="name-input" defaultValue={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                <br/>
                <br/>
                <label htmlFor="duedate-input">Date Due:</label>
                <input id="duedate-input" type="date" defaultValue={taskDuedate} onChange={(e)=> setTaskDuedate(e.target.value)} required />
                <br/>
                <button type="submit"> {props.modeStatus =='create'? "Add Task" : "Update Task"}</button>
            </form>

        </div>
      </div>
  );

}

export default Modal