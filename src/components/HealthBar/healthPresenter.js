import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HealthBar extends Component {

  componentDidMount() {

  }

  render () {
    var data = this.props.health;
    return (
      <div>
      <h1>HealthBar {data}</h1>
        <div>
        </div>
      </div>
    );
  }

}

export default HealthBar;