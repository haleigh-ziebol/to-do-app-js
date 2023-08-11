import React, {useState} from 'react';
import axios from 'axios';
import './Form.css'
import List from '../List/List'

function Form () {
    let [taskName, setTaskName] = useState('');
    let [taskDuedate, setTaskDuedate] = useState('');
    
    const addTask = (evt) => {
        evt.preventDefault();
        console.log(`The task is ${taskName} and the duedate is ${taskDuedate}`);
        axios.post('/todo', {name: taskName, duedate: taskDuedate})
        .then((response) => {
        console.log(response);
        evt.target.reset();
        List;
        })
        .catch((error) => {
        console.log(error);
        });
    }
  
    return (
        <section className="new-task-section">
            <form id="form" onSubmit={addTask}>
                <label htmlFor="name-input">Task:</label>
                <input id="name-input" onChange={e => setTaskName(e.target.value)} />
                <label htmlFor="duedate-input">Date Due:</label>
                <input id="duedate-input" type="date" onChange={e => setTaskDuedate(e.target.value)} />
                <button type="submit">Enter Task</button>
            </form>
        </section>
    );

}

export default Form;
