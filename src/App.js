import React from 'react'
import Top from './assets/images/bg-header-desktop.svg'
import Card from './components/Card'
import './assets/styles/App.sass'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <div className="container__top">
          <img src={Top} alt="Header image"/>
        </div>
        <div className="container__content">
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
