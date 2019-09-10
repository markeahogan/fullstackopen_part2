import React from 'react';

const ResultsList = ({results}) => {
    if (results.length === 0) { return <div>No results</div>; }
    if (results.length > 10){ return <div>Too many matches, specify another filter</div>; }

    return results.map((x) => <div key={x.name}>{x.name}</div>);
}

export default ResultsList;