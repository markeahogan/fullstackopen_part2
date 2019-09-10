import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CountrySearch from './components/CountrySearch';
import ResultsList from './components/ResultsList';
import Country from './components/Country';

function App() {
  const [search, setSearch] = useState('');
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setAllCountries(response.data);
      })
  }, []);

  const filteredCountries = () => allCountries.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));

  let resultElement;
  if (search === ''){
    resultElement = <div>Type to search</div> 
  } else if (filteredCountries().length === 1) {
    resultElement = <Country data={filteredCountries()[0]} />;
  } else {
    resultElement = <ResultsList results={filteredCountries()} onSelect={setSearch}/>
  }

  return (
    <>
    <CountrySearch search={search} setSearch={setSearch} />
    {resultElement}
    </>
  );
}

export default App;
