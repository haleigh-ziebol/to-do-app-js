import React, {useEffect} from 'react';
import axios from 'axios';

function Form () {
  
  const addTask = (evt) => {
    evt.preventDefault();
    console.log(`The task is ${taskName} and the duedate is ${taskDuedate}`);
    axios.post('/todo', {name: taskName, duedate: taskDuedate})
    .then((response) => {
      console.log(response);
      evt.target.reset();
      fetchPeople();
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
      <label htmlFor="duedate-input">Famous for:</label>
      <input id="duedate-input" onChange={e => setTaskDueDate(e.target.value)} />
      <button type="submit">Done</button>
    </form>
  </section>
  );

}

export default Form;
