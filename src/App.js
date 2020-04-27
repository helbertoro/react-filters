import React from 'react';
import { connect } from 'react-redux';
import Top from './assets/images/bg-header-desktop.svg';
import Card from './components/Card';
import './assets/styles/App.sass';

const App = ({ positions }) => {
  return(
    <div className="container">
      <div className="container__top">
        <img src={Top} alt="Header image"/>
      </div>
      <div className="container__content">
        {positions.map((item) => <Card item={item} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    positions: state,
  }
}

export default connect(mapStateToProps, null)(App);
