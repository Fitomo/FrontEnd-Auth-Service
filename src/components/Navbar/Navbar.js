import React from 'react';
import { Link } from 'react-router';
import {
  nav,
  signOut
} from '../../css/main.css';

class Navbar extends React.Component {
  handleClick(id) {
    console.log('this', this, id);
    this.props.loadData(id);
    this.props.hist.push('/userprofile/'+id);
  }

  render() {
    const online = [];
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
          <li><Link to="tap">Tap</Link></li>
          <li><Link to="upload">Upload</Link></li>
          <li>Online users: {Object.keys(this.props.socket).length}</li>
          <li><Link to="/">Profile</Link></li>
          <li className={signOut}><button onClick={this.props.signout.bind(this, this.props.user)}>Signout</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
