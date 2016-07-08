import React, { Component, PropTypes } from 'react';
import * as xpTypes from '../../constants/expTypes';
import { xp } from '../../css/main.css';

class XPbar extends Component {
  componentDidUpdate() {
  }

  render() {
    const data = this.props;
    const total = `XP_LEVEL_${data.level}`;

    return (
      <section>
        <h2>XP: ( {data[data.type]} / {xpTypes[total]} )</h2>
        {data.type !== 'totalXp' ?
          <div>
            <input type="submit" onClick={data.onClickPlus.bind(this, data)} id="_submit" className={xp} />
            <label htmlFor="_submit">
              <div>ADD</div>
            </label>
            <input type="submit" onClick={data.onClickMinus.bind(this, data)} id="_submit" className={xp} />
            <label htmlFor="_submit">
              <div>SUBTRACT</div>
            </label>
          </div>
        : null}
        <div>
        </div>
      </section>
    );
  }

}

export default XPbar;

XPbar.propTypes = {
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
};
