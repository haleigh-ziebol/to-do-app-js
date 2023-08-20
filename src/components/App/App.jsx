import React, { useState } from 'react';import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../List/List'

function App () {
  let [newTask, setNewTask] = useState(false);

  
  return (
    <div className="App">
      <Header />
      <Form setNewTask={setNewTask}/>
      <List newTask={newTask} setNewTask={setNewTask}/>
    </div>
  );

}

export default App
