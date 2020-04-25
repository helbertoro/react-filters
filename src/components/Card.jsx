import React from 'react';
import Label from './Label';
import Language from './Language';
import '../assets/styles/components/Card.sass';

const Card = () => {
  return(
    <div className="card">
      <h4 className="card__company">My Compañia</h4>
      <h3 className="card__profesion">Hello</h3>
      <ul className="card__info">
        <li>1 day</li>
        <li>Full Time</li>
        <li>USA</li>
      </ul>

      <Label type="new"/>
      <Label type="featured"/>
      <Language language="HTML"/>
      <Language language="CSS"/>
      <Language language="JavaScript"/>
      <Language language="Node"/>
    </div>
  )
};

export default Card;