import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const [ filter, setFilter ] = useState('');

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

  const filterPersons = () => {
    if (filter === '') return persons;    
    return persons.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <div>
      <h2>Phonebook</h2>      
      <div>filter shown with: <input value={filter} onChange={(event) => setFilter(event.target.value)}/></div>
      <h2>Add new</h2>   
      <form onSubmit={onSubmit}>
        <div>name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/></div>
        <div>number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons().map(x => <p key={x.name}>{x.name} {x.number}</p>)}
    </div>
  )
}

export default App