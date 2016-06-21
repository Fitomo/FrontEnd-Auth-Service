import React, { Component } from 'react';

let wrapper = {
  'width': '400px',
  'height': '400px',
  'border': '2px black solid',
  'margin': 'auto',
};
let scale = {
  'maxWidth': '100%',
};
class ProfilePic extends Component {

  componentDidMount() {
  }

  render() {
    // console.log('thedir',__dirname);
    let data = this.props.userinfo;
    return (
      <div className='pull-left' style={wrapper}>
        <img style={scale} src='HappyStick.jpg'></img>
      </div>
    );
  }

}

export default ProfilePic;
