import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {
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
    this.setClassNames = this.setClassNames.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setClassNames } = this;
    setClassNames();
  }

  setClassNames() {
    const { isSticky, isFooter, onFooter } = this.props;
    return onFooter ? `${isSticky} ${isFooter}` : isSticky; // add multiple class names
  }

  setFilter(filter) {
    this.selected = filter;
    window.scroll(0, (window.innerHeight * 2) + (window.innerHeight / 8)); // scroll to the content
  }

  handleClick(id) {
    const { loadData, hist } = this.props;
    loadData(id);
    hist.push(`/userprofile/${id}`);
  }

  isActive(value) {
    return value === this.selected ? active : notActive;
  }

  render() {
    const { handleClick, isActive, setFilter, setClassNames } = this;
    const { socket, signOut, user } = this.props;
    const online = [];
    const unique = _.uniq(Object.keys(socket).map((key) => socket[key])).length;
    _.forEach(socket, (value) => online.push(<li onClick={() => handleClick(value)}>{value}</li>));

    return (
      <nav className={setClassNames()}>
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
            <button onClick={() => signOut(user)}>Signout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  loadData: PropTypes.func.isRequired,
  hist: PropTypes.array.isRequired,

  signOut: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,

  isSticky: PropTypes.string.isRequired,
  isFooter: PropTypes.string.isRequired,
  onFooter: PropTypes.bool.isRequired,
};
