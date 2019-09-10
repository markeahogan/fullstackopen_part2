import React, { useState, useEffect } from 'react';
import personService from './services/personService';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    personService.getAll()
      .then(persons => setPersons(persons))
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();

    if (persons.findIndex(x => x.name === newName) === -1){
      const newPerson = {
        name:newName,
        number:newNumber
      };
      personService.add(newPerson)
        .then(x => setPersons(persons.concat(newPerson)));
        
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
      <Filter text={filter} onChange={(e) => setFilter(e.target.value)} />
      <h2>Add new</h2>   
      <PersonForm name={newName} number={newNumber}
        setName={setNewName} setNumber={setNewNumber}
        onSubmit={onSubmit} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons()}/>
    </div>
  )
}

export default App