import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Profile extends Component {

  send(user) {
    this.props.sendData(user, this._username.value, this._name.value);
  }

  render() {
    const data = this.props.userinfo;
    return (
      <section>
        <h1>Welcome, {data.name}</h1>
        <HealthBar />
        <ProfilePic />
        <XPbar type={'totalXp'} />
        <div>
          <button onClick={this.props.showModal}>Edit Profile</button>
          <button onClick={this.props.sync.bind(this, data)}>SyncXP</button>
          <Modal
            isOpen={this.props.modalinfo.modalIsOpen}
            onRequestClose={this.props.hideModal}
            style={customStyles}>
            <div>
              <button type="button" onClick={this.props.hideModal}>
                <span aria-hidden="true">&times;</span>
                <span>Close</span>
              </button>
              <h4>Edit Profile</h4>
            </div>
             
            <form>
              <fieldset>
                <div>
                  <label htmlFor="Username">Username</label>
                  <div>
                  <input id="Username" name="Username" type="text" placeholder={this.props.userinfo.username} ref={(c) => this._username = c}></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="Name">Name</label>
                  <div>
                  <input id="Name" name="Name" type="text" placeholder={this.props.userinfo.name} ref={(c) => this._name = c}></input>
                  </div>
                </div>
              </fieldset>
            </form>
          
            <div>
              <button type="button" onClick={this.props.hideModal}>Close</button>
              <button type="button" onClick={this.send.bind(this, this.props.userinfo)}>Save changes</button>
            </div>
          </Modal>
        </div>
      </section>
    );
  }

}

export default Profile;