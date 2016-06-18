import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {

  componentDidMount() {
    
  }

  render () {
    var data = this.props.userinfo;
    console.log('THE DATA', data);
    return (
      <div>
      <h1>HELLO, {data.username}</h1>
       <div>
          {'HEALTH: ' + data.health}
        </div>
        <div>
          {data.xp}
        </div>
      </div>
    );
  }

}

export default Profile;