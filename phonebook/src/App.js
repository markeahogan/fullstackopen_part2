import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();

    if (persons.findIndex(x => x.name === newName) != -1){
      alert(`${newName} is already added to phonebook`);
    }else{
      setPersons(persons.concat({name:newName}));
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x => <p key={x.name}>{x.name}</p>)}
    </div>
  )
}

export default App