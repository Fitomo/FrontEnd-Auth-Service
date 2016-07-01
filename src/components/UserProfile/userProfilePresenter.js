import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';
import * as xpTypes from '../../constants/expTypes';
// import Modal from 'react-modal';

class UserProfile extends Component {

  componentWillMount() {
    this.props.loadData(this.props.params.id);
  }

  render() {
    const total = 'XP_LEVEL_' + this.props.loadedUserinfo.level;
    return (
      <div>
        <h1>{this.props.loadedUserinfo.username}</h1>
        <HealthBar type={'loaded'}/>
        <ProfilePic />
        <h2>XP: ({this.props.loadedUserinfo.totalXp} / {xpTypes[total]})</h2>
        <button className='btn btn-primary' onClick={this.props.addFriend}>Follow</button>
      </div>
    );
  }

}

export default UserProfile;
