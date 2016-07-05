import React, { Component } from 'react';
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

class Tap extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <section>
        <h1>{this.props.xp}</h1>
        <button className={'btn btn-primary bigbtn'} onClick={this.props.addGains}>GAINZ</button>
        <button className={'btn btn-primary bigbtn'} onClick={this.props.sendToUser.bind(this, this.props.user, this.props.xp)}>FINISH SET</button>
        <h1>Every 10,000 REPS = 1 XP</h1>
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
            <h4 className="modal-title">GAINZZZ</h4>
          </div>
          <div className="modal-body">
          {'XP GAINED: ' + this.props.modalinfo.modalProps.xpcalc}
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
