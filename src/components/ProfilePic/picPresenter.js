import React, { Component } from 'react';

class ProfilePic extends Component {
  render() {
    return (
      <section>
        <img alt="none" src={this.props.picture}></img>
      </section>
    );
  }
}

export default ProfilePic;

