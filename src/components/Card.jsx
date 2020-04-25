import React from 'react';
import Label from './Label';
import '../assets/styles/components/Card.sass';

const Card = () => {
  return(
    <div className="card">
      <h3 className="card__profesion">Hello</h3>
      <Label type="new"/>
      <Label type="featured"/>
    </div>
  )
};

export default Card;