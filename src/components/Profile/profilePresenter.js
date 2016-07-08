import React, { Component, PropTypes } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import Modal from 'react-modal';
import {
  profileContainer,
  profileComponents,
  editProfile,
  syncXP,
  detail,
  currentLevel,
} from '../../css/main.css';

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
    const { _username, _name } = this;
    const { sendData } = this.props;
    sendData(user, _username.value, _name.value);
  }

  render() {
    const { send } = this;
    const { userinfo, showModal, hideModal, modalinfo, sync } = this.props;
    const { name, data, username, level } = userinfo;
    const levelClassName = `${detail} ${currentLevel}`;
    return (
      <section>
        <h1>Welcome, {name}</h1>
        <div className={profileContainer}>
          <div className={profileComponents}>
            <ProfilePic />
            <HealthBar />
            <div className={levelClassName}>Current Level: {level}</div>
            <XPbar type={'totalXp'} />
          </div>

          <div>
            <button onClick={showModal} id="_editProfile" className={editProfile}></button>
            <label htmlFor="_editProfile">Edit Profile</label>
            <button onClick={() => sync(data)} id="_syncXP" className={syncXP}></button>
            <label htmlFor="_syncXP">Sync XP</label>

            <Modal
              isOpen={modalinfo.modalIsOpen}
              onRequestClose={hideModal}
              style={customStyles}
            >
              <div>
                <button type="button" onClick={hideModal}>
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
                      <input
                        id="Username"
                        name="Username"
                        type="text"
                        placeholder={username}
                        ref={(c) => this._username = c}
                      >
                      </input>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="Name">Name</label>
                    <div>
                      <input
                        id="Name"
                        name="Name"
                        type="text"
                        placeholder={name}
                        ref={(c) => this._name = c}
                      >
                      </input>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div>
                <button type="button" onClick={hideModal}>Close</button>
                <button type="button" onClick={() => send(userinfo)}>Save changes</button>
              </div>
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;

Profile.propTypes = {
  userinfo: PropTypes.object.isRequired,
  sendData: PropTypes.func.isRequired,
  modalinfo: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  sync: PropTypes.func.isRequired,
};
