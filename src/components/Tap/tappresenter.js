import React, { Component, PropTypes } from 'react';
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

class Tap extends Component {

  render() {
    return (
      <section>
        <h1>Train</h1>
        <p>{this.props.xp}</p>
        <button className={'btn btn-primary bigbtn'} onClick={this.props.addGains}>GAINZ</button>
        <button className={'btn btn-primary bigbtn'} onClick={this.props.sendToUser.bind(this, this.props.user, this.props.xp)}>FINISH SET</button>
        <p>Every 10,000 REPS = 1 XP</p>
        <Modal
          isOpen={this.props.modalinfo.modalIsOpen}
          onRequestClose={this.props.hideModal}
          style={customStyles}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.hideModal}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">GAINZZZ</h4>
            </div>
            <div className="modal-body">
              {`XP GAINED: ${this.props.modalinfo.modalProps.xpcalc}`}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
            </div>
          </div>
        </Modal>
      </section>
    );
  }

}

export default Tap;

Tap.propTypes = {
  modalinfo: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  xp: PropTypes.number.isRequired,
  sendToUser: PropTypes.func.isRequired,
  addGains: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
