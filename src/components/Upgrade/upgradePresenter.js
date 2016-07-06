import React, { Component, PropTypes } from 'react';
import XPbar from '../XPbar/xpIndex.js';
import * as actions from '../../actions/index';
import * as ajaxUtil from '../../util/ajaxUtil';

class Upgrade extends Component {

  submitXPtoUser(data) {
    data.health = 100 + (data.abXp / 10);
    ajaxUtil.updateUserInDB(data, (json) => {
      this.props.dispatch(actions.setUser(json));
      this.props.dispatch(actions.checkLevel(data));
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <section>
        <h1>Upgrade</h1>
        <h3>XP to distribute: {this.props.distXp}</h3>
        <h3>ARMS:</h3>
        <XPbar type={'armXp'} />
        <h3>LEGS:</h3>
        <XPbar type={'legXp'} />
        <h3>ABS:</h3>
        <XPbar type={'abXp'} />
        <div>
          <button onClick={this.submitXPtoUser.bind(this, this.props.user)} type="button">SUBMIT STATS</button>
        </div>
      </section>
    );
  }
}

export default Upgrade;

Upgrade.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  distXp: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};
