import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex'

class Profile extends Component {

  componentDidMount() {
    
  }

  render () {
    var data = this.props.userinfo;
    console.log('THE DATA', data);
    return (
      <div>
      <h1>HELLO, {data.username}</h1>
        <HealthBar />
        <ProfilePic />
        <XPbar />
        <div className='lookLikeButton'>
          <Link to='editprofile'>Edit Profile</Link>
        </div>
      </div>
    );
  }

}

export default Profile;