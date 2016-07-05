import React, { Component } from 'react';

let wrapper = {
  // width: '400px',
  // height: '400px',
  // border: '1px black solid',
  // display: 'inline-block',
  // margin: '30px 0 0 0',
};
let scale = {
  // maxWidth: '100%',
};
class ProfilePic extends Component {
  render() {
    let data = this.props.userinfo;
    return (
      <section style={wrapper}>
        <img style={scale} src={this.props.picture}></img>
      </section>
    );
  }

}

export default ProfilePic;
