import React, {useState} from 'react';
import axios from 'axios';
import './Form.css'
import List from '../List/List'

function Form (props) {
    let [taskName, setTaskName] = useState('');
    let [taskDuedate, setTaskDuedate] = useState('');
    
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
  
    return (
        <section className="new-task-section">
            <form id="form" onSubmit={addTask}>
                <label htmlFor="name-input">Task:</label>
                <input id="name-input" onChange={e => setTaskName(e.target.value)} required/>
                <label htmlFor="duedate-input">Date Due:</label>
                <input id="duedate-input" type="date" onChange={e => setTaskDuedate(e.target.value)} required />
                <button type="submit">Enter Task</button>
            </form>
        </section>
    );

}

export default Form;
