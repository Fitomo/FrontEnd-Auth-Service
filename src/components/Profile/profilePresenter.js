import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';

class Profile extends Component {

  redirToEdit() {
    this.props.history.push('/editprofile');
  }

  render() {
    const data = this.props.userinfo;
    return (
      <div>
        <h1>HELLO, {data.name}</h1>
        <HealthBar />
        <ProfilePic />
        <XPbar type={'totalXp'} />
        <div className={'lookLikeButton'}>
          <button className={'btn btn-primary'} onClick={this.redirToEdit.bind(this)}>Edit Profile</button>
        </div>
      </div>
    );
  }

}

export default Profile;