import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as xpTypes from '../../constants/expTypes';


class XPbar extends Component {
  componentDidMount() {

  }

  render() {
    const data = this.props;
    const total = 'XP_LEVEL_' + data.level;

    return (
      <div>
        <h2>XP: ({data[data.type]} / {xpTypes[total]})</h2>
        {data.type !== 'totalXp' ?
          <div>
            <button onClick={data.onClickPlus.bind(this, data.type)} type="button">ADD</button>
            <button onClick={data.onClickMinus.bind(this, data.type)} type="button">SUBTRACT</button>
          </div>
        : null}
        <div>
        </div>
      </div>
    );
  }

}

export default XPbar;

// make constants to show what exp left based on level
