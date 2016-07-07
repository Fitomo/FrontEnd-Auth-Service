import React, { Component, PropTypes } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as xpTypes from '../../constants/expTypes';

class UserProfile extends Component {

  componentWillMount() {
    this.props.loadData(this.props.params.id);
  }

  challenge() {
    this.props.history.push('/battle');
  }

  render() {
    const total = `XP_LEVEL_${this.props.loadedUserinfo.level}`;
    return (
      <section>
        <h1>{this.props.loadedUserinfo.username}</h1>
        <HealthBar type={'loaded'} />
        <img alt="none" src={`../${this.props.pictureloaded}`}></img>
        <button className="btn btn-success" onClick={() => this.props.addFriend(this.props.loadedUserinfo, this.props.user)}>
          Follow<span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></button>
        <button className="btn btn-danger" onClick={() => this.props.removeFriend(this.props.loadedUserinfo, this.props.user)}>
          Unfollow<span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <p>Current Level: {this.props.loadedUserinfo.level}</p>
        <button className="btn btn-danger" onClick={() => this.challenge()}>
        CHALLENGE</button>
        <h2>XP: ({this.props.loadedUserinfo.totalXp} / {xpTypes[total]})</h2>
      </section>
    );
  }

}

export default UserProfile;

UserProfile.propTypes = {
  loadedUserinfo: PropTypes.object.isRequired,
  addFriend: PropTypes.func.isRequired,
  removeFriend: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loadData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
