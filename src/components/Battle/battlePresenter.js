import React, { Component, PropTypes } from 'react';
import HealthBar from '../HealthBar/healthIndex';
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

class Battle extends Component {

  componentDidMount() {
    this.text = '';
  }

  modalClose() {
    this.props.history.push('/');
  }

  render() {
    return (
      <section>
        <h1>BATTLE</h1>
        <h1>{this.props.user.username}</h1>
        <HealthBar />
        <div>
          <button className="btn btn-primary" onClick={() => this.props.startBattle(this.props.user, this.props.loaded)}>START</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => this.props.attack(this.props.user, this.props.loaded, 'punch')}>PUNCH</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => this.props.attack(this.props.user, this.props.loaded, 'kick')}>KICK</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => this.props.attack(this.props.user, this.props.loaded, 'flex')}>FLEX</button>
        </div>
        <h1>VS</h1>
        <h1>{this.props.loaded.username}</h1>
        <HealthBar type="loaded" />
        <Modal
          isOpen={this.props.modalinfo.modalIsOpen}
          onRequestClose={this.props.hideModal}
          style={customStyles}
        >

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={() => { this.props.hideModal(); this.modalClose(); }}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">BATTLE OVER</h4>
            </div>
            <div className="modal-body">
            {`VICTOR:  ${this.props.modalinfo.modalProps.winner}`}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={() => { this.props.hideModal(); this.modalClose(); }}>Close</button>
            </div>
          </div>
        </Modal>
        <h1>{this.props.text}</h1>
      </section>
    );
  }
}

export default Battle;

Battle.propTypes = {
  modalinfo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  startBattle: PropTypes.func.isRequired,
  attack: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loaded: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

