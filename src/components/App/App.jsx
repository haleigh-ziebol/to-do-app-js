import React, {useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../List/List'

function App () {
  
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );

}

export default App
