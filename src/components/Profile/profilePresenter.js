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
      <div>
        <h1>HELLO, {data.name}</h1>
        <HealthBar />
        <ProfilePic />
        <XPbar type={'totalXp'} />
        <div>
          <button className={'btn btn-primary'} onClick={this.props.showModal}>Edit Profile</button>
          <button className={'btn btn-primary'} onClick={this.props.online}>online</button>
          <Modal
            isOpen={this.props.modalinfo.modalIsOpen}
            onRequestClose={this.props.hideModal}
            style={customStyles} >

            <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.hideModal}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Edit Profile</h4>
            </div>
            <div className="modal-body">
             
            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="Username">Username</label>
                  <div className="col-md-6">
                  <input id="Username" name="Username" type="text" placeholder={this.props.userinfo.username} className="form-control input-lg" ref={(c) => this._username = c}></input>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="Name">Name</label>
                  <div className="col-md-6">
                  <input id="Name" name="Name" type="text" placeholder={this.props.userinfo.name} className="form-control input-lg" ref={(c) => this._name = c}></input>
                  </div>
                </div>
              </fieldset>
            </form>
            </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={this.send.bind(this, this.props.userinfo)}>Save changes</button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }

}

export default Profile;