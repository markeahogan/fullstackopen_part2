import React from 'react';

const ResultsList = ({results, onSelect}) => {
    if (results.length === 0) { return <div>No results</div>; }
    if (results.length > 10){ return <div>Too many matches, specify another filter</div>; }

    return results.map((x) => <div key={x.name}>{x.name} <button onClick={() => onSelect(x.name)}>show</button></div>);
}

export default ResultsList;