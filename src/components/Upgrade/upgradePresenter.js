import React, { Component } from 'react';
import XPbar from '../XPbar/xpIndex.js';
import * as actions from '../../actions/index';
import * as ajaxUtil from '../../util/ajaxUtil';

class Upgrade extends Component {

  componentDidMount() {

  }

  submitXPtoUser(data) {
    ajaxUtil.updateUserInDB(data, (json) => {
      this.props.dispatch(actions.setUser(json));
      this.props.dispatch(actions.checkLevel(data));
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
