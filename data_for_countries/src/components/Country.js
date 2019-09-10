import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Country = ({data}) => {   
    
    const [weather, setWeather] = useState(
        {
            temperature:"",
            wind:"",
            icon:""
        });

    useEffect(() => {
        Axios
            .get(`http://api.weatherstack.com/current?access_key=fe319e6c452f910e2edd4279bddc85c3&query=${data.capital}`)
            .then(({data}) => {
                console.log(data);
                const temperature = data.current.temperature;
                const wind = `${data.current.wind_speed} kph direction ${data.current.wind_dir}`;
                const icon = data.current.weather_icons[0];
                setWeather({temperature, wind, icon});
            })
    }, []);
    
    return (
        <>
        <h1>{data.name}</h1>
        <div>capital {data.capital}</div>
        <div>population {data.population}</div>
        <h2>languages</h2>
        <ul>
            {data.languages.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
        <img src={data.flag} width={300}/>        
        <h2>Weather in {data.capital}</h2>
        <div><strong>temperature:</strong> {weather.temperature} Celcius</div>
        <img src={weather.icon} width={100}/>       
        <div><strong>wind:</strong> {weather.wind}</div>
        </>
    )
};
export default Country;