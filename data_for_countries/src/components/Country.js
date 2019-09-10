import React from 'react';

const Country = ({data}) => {
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
        </>
    )
};

export default Country;