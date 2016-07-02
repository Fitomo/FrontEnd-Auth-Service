import React, { Component } from 'react';

let rect = {
  'width': '500px',
  'height': '40px',
};

let smallrect = {
  'width': '10px',
  'height': '20px',
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
    let healthBlocks = [];
    let hp = 0;
    this.props.type === 'loaded' ? hp = this.props.health2 : hp = this.props.health;

    for (let i = 0; i < hp / 2; i++) {
      healthBlocks.push(<div key={i} style={smallrect}></div>);
    }
    return (
      <div>
        <h1>Health: {hp}</h1>
        <div style={rect}>
          {healthBlocks}
        </div>
      </div>
    );
  }

}

export default HealthBar;
