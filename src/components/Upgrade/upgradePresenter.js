import React, { Component, PropTypes } from 'react';
import XPbar from '../XPbar/xpIndex.js';
import * as actions from '../../actions/index';
import * as ajaxUtil from '../../util/ajaxUtil';
import { xpTitle, xp } from '../../css/main.css';

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
        <h3 className={xpTitle}>XP to distribute: {this.props.distXp}</h3>
        <h3 className={xpTitle}>ARMS:</h3>
        <XPbar type={'armXp'} />
        <h3 className={xpTitle}>LEGS:</h3>
        <XPbar type={'legXp'} />
        <h3 className={xpTitle}>ABS:</h3>
        <XPbar type={'abXp'} />
        <div className={xpTitle}>
          <input type="submit" onClick={this.submitXPtoUser.bind(this, this.props.user)} id="_submit" className={xp} />
          <label htmlFor="_submit">
            <div>SUBMIT STATS</div>
          </label>
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
