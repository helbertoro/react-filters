import React, { useState, useEffect} from 'react';
import Label from './Label';
import { connect } from 'react-redux';
import { filterSkill } from '../actions';
import '../assets/styles/components/Card.sass';

const Card = (props) => {
  const { item } = props;
  const [filter, setFilter] = useState([]);

  const handleFilterSkill = (item) => {
    setFilter(filter => [...filter, item]);
  }

  useEffect(() => {
    if(filter.length > 0) {
      props.filterSkill(filter);
    }
  })
  console.log(filter);
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
          item.languages.map((item) => <span onClick={() => handleFilterSkill(item)} className="label__language">{item}</span>)
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  filterSkill
}

export default connect(null, mapDispatchToProps)(Card);
