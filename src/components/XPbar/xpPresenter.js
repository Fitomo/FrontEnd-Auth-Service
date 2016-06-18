import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class XPbar extends Component {

  componentDidMount() {

  }

  render () {
    var data = this.props;
    return (
      <div>
      <h1>XP {data.xp} {data.level}</h1>
        <div>
        </div>
      </div>
    );
  }

}

export default XPbar;