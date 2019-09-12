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
  const [ notification, setNotification ] = useState('');

  useEffect(() => {
    personService.getAll()
      .then(persons => setPersons(persons))
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name:newName,
      number:newNumber
    };

    addOrUpdate(newPerson);
    
    setNewName('');
    setNewNumber('');
  }

  const addOrUpdate = (newPerson) => {
    const personExistsAlready = persons.find(x => x.name === newPerson.name);

    if (!personExistsAlready){
      personService.add(newPerson)
        .then(x => {
          setPersons(persons.concat(x))
          setNotification('Added');
          setTimeout(() => setNotification(''), 2000);
        });
    }else{
      personService.update(personExistsAlready.id, newPerson)
        .then(person => {
          setPersons(persons.map(x => x.id === person.id ? person : x))
          setNotification('Updated');
          setTimeout(() => setNotification(''), 2000);
        });
    }
  }
  
  const remove = (id) => {
    const person = persons.find(x=>x.id===id);
    if (confirm(`Do you want to delete ${person.name}`) === false) return;
    
    personService.remove(id)
    .then(() => {
        setPersons(persons.filter(x => x.id !== id));
      });
  }

  const filterPersons = () => {
    if (filter === '') return persons;    
    return persons.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <div>
      <h2>Phonebook</h2>      
      <Notification message={""}/>
      <Filter text={filter} onChange={(e) => setFilter(e.target.value)} />
      <h2>Add new</h2>   
      <PersonForm name={newName} number={newNumber}
        setName={setNewName} setNumber={setNewNumber}
        onSubmit={onSubmit} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} remove={remove} />
    </div>
  )
}

export default App