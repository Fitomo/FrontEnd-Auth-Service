import React, { Component, PropTypes } from 'react';
import * as xpTypes from '../../constants/expTypes';
import {
  xp,
  xpContainer,
  detail,
} from '../../css/main.css';

class XPbar extends Component {
  componentDidUpdate() {
  }

  render() {
    const data = this.props;
    console.log('THE DATA', data);
    const total = `XP_LEVEL_${data.level}`;

    return (
      <section className={xpContainer}>
        <div className={detail}>XP: {data[data.type]} / {xpTypes[total]}</div>
        {data.type !== 'totalXp' ?
            <div>
             <button onClick={data.onClickPlus.bind(this, data)} type="button">ADD</button>
             <button onClick={data.onClickMinus.bind(this, data)} type="button">SUBTRACT</button>
            </div>
          : null}
      </section>
    );
  }

}

export default XPbar;

XPbar.propTypes = {
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
};
