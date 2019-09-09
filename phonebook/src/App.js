import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "39-44-5323523"
    }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (persons.findIndex(x => x.name === newName) === -1){
      const newPerson = {
        name:newName,
        number:newNumber
      };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }else{
      alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/></div>
        <div>number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x => <p key={x.name}>{x.name} {x.number}</p>)}
    </div>
  )
}

export default App