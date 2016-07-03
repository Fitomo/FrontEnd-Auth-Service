import React from 'react';
import { Link } from 'react-router';
import {
  nav,
  signOut
} from '../../css/main.css';
import * as _ from 'lodash';

class Navbar extends React.Component {
  handleClick(id) {
    this.props.loadData(id);
    this.props.hist.push(`/userprofile/${id}`);
  }

  render() {
    const online = [];
    const unique = _.uniq(Object.keys(this.props.socket).map((key) => this.props.socket[key])).length;
    for (const key in this.props.socket) {
      online.push(
        <li onClick={this.handleClick.bind(this, this.props.socket[key])}>{this.props.socket[key]}</li>
      );
    }
    return (
      <nav>
        <ul className={nav}>
          <li><Link to="/">FITOMO</Link></li>
          <li><Link to="stats">Stats</Link></li>
          <li><Link to="upgrade">Upgrade</Link></li>
          <li onClick={this.test}><Link to="leader">Leaderboard</Link></li>
          <li><Link to="progress">Progress</Link></li>
          <li><Link to="tap">Train</Link></li>
          <li><Link to="upload">Upload</Link></li>
          <li>Online users: {unique}</li>
          <li><Link to="/">Profile</Link></li>
          <li className={signOut}><button onClick={this.props.signout.bind(this, this.props.user)}>Signout</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
