import React from 'react';
import { Link } from 'react-router';
import { nav } from '../../style/style';

class Navbar extends React.Component {

  handleClick(id) {
    console.log('this', this, id);
    this.props.loadData(id);
    this.props.hist.push('/userprofile/'+id);
  }

  render() {
    let online = [];
    for (let key in this.props.socket) {
      online.push(<li onClick={this.handleClick.bind(this, this.props.socket[key])}><h5 className="text-center">{this.props.socket[key]}</h5></li>);
    }

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
            <li onClick={this.test}><Link to="leader">Leaderboard</Link></li>
            <li><Link to="progress">Progress</Link></li>
            <li><Link to="tap">Tap</Link></li>
            <li><Link to="upload">Upload</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <span style={{'marginRight': '10px'}} className='label label-danger label-as-badge'>{Object.keys(this.props.socket).length}</span>
            OnlineUsers<b className="caret"></b></a>
              <ul className="dropdown-menu">
                  {online}
              </ul>
            </li>
            <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Profile</Link></li>
            <button onClick={this.props.signout.bind(this, this.props.user)} ><span className="glyphicon glyphicon-log-in"></span> Signout</button>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
