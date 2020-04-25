import React from 'react';
import Label from './Label';
import Language from './Language';
import '../assets/styles/components/Card.sass';

const Card = (props) => {
  const item = props.data;
  console.log(item);
  return(
    <div className="card">
      <div className="card__logo">
        <img className="card__logo--image" src="../assets/images/logos/photosnap.svg" alt={item.company} />
      </div>
      <div className="card__info">
        <h4 className="card__info--company">{item.company}</h4>
        {item.new ? <Label type="new"/> : ''}
        {item.featured ? <Label type="featured"/> : ''}
        <h3 className="card__info--profesion">{item.position}</h3>
        <ul className="card__info--details">
          <li>{item.postedAt}</li>
          <li>{item.contract}</li>
          <li>{item.location}</li>
        </ul>
      </div>
      <div className="card__skills">
        {item.languages &&
          item.languages.map((item) => <Language language={item} />)
        }
      </div>
    </div>
  )
};

export default Card;
