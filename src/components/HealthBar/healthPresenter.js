import React, { Component, PropTypes } from 'react';

let rect = {
  width: '500px',
  height: '40px',
  margin: '20px auto',
};

let smallrect = {
  width: '10px',
  height: '20px',
  background: 'red',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5px',
  display: 'inline-block',
};


class HealthBar extends Component {
  render() {
    let healthBlocks = [];
    let hp = 0;
    this.props.type === 'loaded' ? hp = this.props.health2 : hp = this.props.health;

    for (let i = 0; i < hp / 2; i++) {
      healthBlocks.push(<div key={i} style={smallrect}></div>);
    }
    return (
      <section>
        <div>Health: {hp}</div>
        <div style={rect}> {healthBlocks}</div>
      </section>
    );
  }

}

export default HealthBar;

HealthBar.propTypes = {
  type: PropTypes.string,
  health: PropTypes.number,
  health2: PropTypes.number,
};
