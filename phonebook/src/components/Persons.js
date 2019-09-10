import React from 'react';

const Persons = ({persons}) => {
    return persons.map(x =>
        <p key={x.id}>
            {x.name} {x.number} 
            <button onClick={()=>delete(x.id)}>Delete</button>
        </p>
    );
}

export default Persons;