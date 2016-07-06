import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import * as actions from '../../actions/index';
import Modal from 'react-modal';

class Battle extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <section>
        <h1>BATTLE</h1>
        <h1>{this.props.user.username}</h1>
        <HealthBar />
        <div>
          <button className='btn btn-primary' onClick={() => this.props.attack(this.props.user, this.props.loaded, 'punch')}>PUNCH</button>
        </div>
        <div>
          <button className='btn btn-primary' onClick={() => this.props.attack(this.props.user, this.props.loaded, 'kick')}>KICK</button>
        </div>
        <div>
          <button className='btn btn-primary' onClick={() => this.props.attack(this.props.user, this.props.loaded, 'defend')}>DEFEND</button>
        </div>
      </section>
    );
  }
}

export default Battle;
