import React, { Component } from 'react';

let rect = {
  'width': '500px',
  'height': '40px',
  'background': '#F5DEB3',
};

let smallrect = {
  'width': '10px',
  'height': '40px',
  'background': 'red',
  'borderStyle': 'solid',
  'borderWidth': '2px',
  'borderRadius': '5px',
  'display': 'inline-block',
}


class HealthBar extends Component {

  componentDidMount() {

  }

  render() {
    let health = [];
    for (let i = 0; i < this.props.health / 2; i++) {
      health.push(<div key={i} style={smallrect}></div>);
    }
    let data = this.props.health;
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
