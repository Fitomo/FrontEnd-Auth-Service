import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var rect = {
  'width': '500px',
  'height': '40px',
  'background': '#F5DEB3'
}

var smallrect = {
  'width': '10px',
  'height': '40px',
  'background': 'red',
  'border-style': 'solid',
  'border-width': '2px',
  'border-radius': '5px',
  'display': 'inline-block'
}


class HealthBar extends Component {

  componentDidMount() {

  }

  render () {
    var health = [];
    for(var i = 0; i < this.props.health / 2; i++) {
      health.push(<div style={smallrect}></div>);
    }
    var data = this.props.health;
    return (
      <div>
      <h1>Health: {data}</h1>
        <div style={rect}>
          {health}
        </div>
      </div>
    );
  }

}

export default HealthBar;