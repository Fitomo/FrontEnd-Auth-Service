import React, { Component, PropTypes } from 'react';
import {
  healthSquare,
  healthIndicator,
  healthContainer,
  detail,
} from '../../css/main.css';

class HealthBar extends Component {
  render() {
    let healthBlocks = [];
    let hp = 0;
    this.props.type === 'loaded' ? hp = this.props.health2 : hp = this.props.health;

    for (let i = 0; i < hp / 5.5; i++) {
      healthBlocks.push(<div key={i} className={healthSquare}></div>);
    }

    return (
      <section className={healthContainer}>
        <div className={detail}>Health: {hp}</div>
        <div className={healthIndicator}>{healthBlocks}</div>
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
