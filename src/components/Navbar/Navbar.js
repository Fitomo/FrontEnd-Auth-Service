import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {
  signOut,
  active,
  notActive,
} from '../../css/main.css';
import * as _ from 'lodash';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.selected = '';
    this.setFilter = this.setFilter.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  handleClick(id) {
    this.props.loadData(id);
    this.props.hist.push(`/userprofile/${id}`);
  }

  setFilter(filter) {
    this.selected = filter;
  }

  isActive(value) {
    return value === this.selected ? active : notActive;
  }

  render() {
    const online = [];
    const unique = _.uniq(Object.keys(this.props.socket).map((key) => this.props.socket[key])).length;
    for (const key in this.props.socket) {
      online.push(
        <li onClick={this.handleClick.bind(this, this.props.socket[key])}>{this.props.socket[key]}</li>
      );
    }
    const { isActive, setFilter } = this;
    const { isSticky, isFooter } = this.props;
    const classnames = `${isSticky} ${isFooter}`; // add multiple class names
    return (
      <nav className={classnames}>
        <ul>
          <li className={isActive('home')} onClick={() => setFilter('home')}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('stats')} onClick={() => setFilter('stats')}>
            <Link to="stats">Stats</Link>
          </li>
          <li className={isActive('upgrade')} onClick={() => setFilter('upgrade')}>
            <Link to="upgrade">Upgrade</Link>
          </li>
          <li className={isActive('leader')} onClick={() => setFilter('leader')}>
            <Link to="leader">Leaderboard</Link>
          </li>
          <li className={isActive('tap')} onClick={() => setFilter('tap')}>
            <Link to="tap">Train</Link>
          </li>
          <li className={isActive('progress')} onClick={() => setFilter('progress')}>
            <Link to="progress">Progress</Link>
          </li>
          <li className={isActive('upload')} onClick={() => setFilter('upload')}>
            <Link to="upload">Upload</Link>
          </li>
          <li className={isActive('#')} onClick={() => setFilter('#')}>
            <Link to="#">Online users: {unique}</Link>
          </li>
          <li className={signOut}>
            <button onClick={this.props.signout.bind(this, this.props.user)}>Signout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  isSticky: PropTypes.string.isRequired,
  isFooter: PropTypes.string.isRequired,
};
