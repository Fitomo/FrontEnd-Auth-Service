import React, { Component } from 'react';
import XPbar from '../XPbar/xpIndex.js';

class Upgrade extends Component {

  componentDidMount() {

  }

  submitXPtoUser(data) {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <h1>XP TO DIST: {this.props.distXp}</h1>
        <h3>ARMS:</h3>
        <XPbar type={'armXp'} />
        <h3>LEGS:</h3>
        <XPbar type={'legXp'} />
        <h3>ABS:</h3>
        <XPbar type={'abXp'} />
      <div>
        <button onClick={this.submitXPtoUser.bind(this, this.props.user)} type="button">SUBMIT STATS</button>
      </div>
      </div>
    );
  }

}

export default Upgrade;