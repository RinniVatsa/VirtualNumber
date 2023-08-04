// src/components/CountryCard.js

import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img src={country.image} className="card-img-top" alt={country.name} />
      <div className="card-body">
        <h5 className="card-title">{country.name}</h5>
        <p className="card-text"> Number: {country.dummyNumber}</p>
      </div>
    </div>
  );
};

export default CountryCard;
