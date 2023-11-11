import React, {useState} from 'react';
import './Header.css';
import '../Modal/Modal'


function Header (props) {
  
  let [openModal, setOpenModal] = useState(false);
  let [modeStatus, setModeStatus] = useState('')

  return (
    <div>
      <div className="header">
        <h1>TO DO APP</h1>
      </div>
      <button onClick={()=> (setOpenModal(true), setModeStatus('create'))}>Add Task</button>
      {(openModal && modeStatus== 'create') && (<Modal setOpenModal={setOpenModal}/>)}
    </div>
  );

}

export default Header