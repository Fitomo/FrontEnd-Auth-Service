import React from 'react';
import {Link} from 'react-router';
import { nav } from '../../style/style';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div style={nav}>
      <nav className={"navbar-inverse navbar-fixed-top navbar-collapse navbar-page-header navbar-right"}>
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">FITOMO</Link>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="glyphicon glyphicon-menu-hamburger sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="container-fluid nav navbar-nav">
            <li><Link to="stats">Stats</Link></li>
            <li><Link to="upgrade">Upgrade</Link></li>
            <li><Link to="challenge">Challenge</Link></li>
            <li><Link to="leader">Leaderboard</Link></li>
            <li><Link to="progress">Progress</Link></li>
            <li><Link to="tap">Tap</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="login"><span className="glyphicon glyphicon-user"></span> Profile</Link></li>
            <li><Link to="signup"><span className="glyphicon glyphicon-log-in"></span> Signout</Link></li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;