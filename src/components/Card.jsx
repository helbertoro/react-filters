import React from 'react';
import Label from './Label';
import { connect } from 'react-redux';
import { filterSkill } from '../actions';
import '../assets/styles/components/Card.sass';

const Card = (props) => {
  const { item } = props;

  const handleFilterSkill = () => {
    props.filterSkill(["Python", "HTML"])
  }

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
          item.languages.map((item) => <span onClick={handleFilterSkill} className="label__language">{item}</span>)
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  filterSkill
}

export default connect(null, mapDispatchToProps)(Card);
