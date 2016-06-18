import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProfilePic extends Component {

  componentDidMount() {
    
  }

  render () {
    var data = this.props.userinfo;
    return (
      <div>
        <h1>profilepic</h1>
      </div>
    );
  }

}

export default ProfilePic;