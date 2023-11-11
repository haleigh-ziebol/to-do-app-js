import React, { useState } from 'react';import Header from '../Header/Header';
import List from '../List/List';
import Modal from '../Modal/Modal';

function App () {
  let [newTask, setNewTask] = useState(0);


  
  return (
    <div className="App">
      <Header />
      <List newTask={newTask}/>
    </div>
  );

}

export default App
