import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';

class Leaderboard extends Component {

  send(user) {
    this.props.sendData(user, this._username.value, this._name.value);
  }

  render() {
    const data = this.props.userinfo;
    return (
      <div>
        <h1>LEADERBOARD</h1>
        <div>
          <button className={'btn btn-primary'} onClick={this.props.sendData}>online</button>
        </div>
      </div>
    );
  }

}

export default Leaderboard;