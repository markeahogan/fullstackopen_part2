import React from 'react';

const Persons = ({persons}) => {
    return persons.map(x => <p key={x.name}>{x.name} {x.number}</p>);
}

export default Persons;