import React from 'react';
import axios from 'axios';

function List () {
  
  return (
    <section>
        <ul>
            {/* TODO: Render the list of famous people */}
            {famousPeopleArray.map(person => (<li>{person.name} is from {person.role}</li>))}
        </ul>
    </section>
  );

}

export default List;