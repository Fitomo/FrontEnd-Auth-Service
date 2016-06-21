import React, { Component } from 'react';
import * as actions from '../../actions/index';

class Tap extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h1>{this.props.xp}</h1>
        <button className={'btn btn-primary bigbtn'} onClick={this.props.addGains.bind(this)}>GAINZ</button>
      </div>
    );
  }

}

export default Tap;

// .btn {
//   background: #000000;
//   background-image: -webkit-linear-gradient(top, #000000, #2bb85c);
//   background-image: -moz-linear-gradient(top, #000000, #2bb85c);
//   background-image: -ms-linear-gradient(top, #000000, #2bb85c);
//   background-image: -o-linear-gradient(top, #000000, #2bb85c);
//   background-image: linear-gradient(to bottom, #000000, #2bb85c);
//   -webkit-border-radius: 34;
//   -moz-border-radius: 34;
//   border-radius: 34px;
//   text-shadow: 0px 4px 0px #666666;
//   font-family: Arial;
//   color: #ffffff;
//   font-size: 60px;
//   padding: 10px 20px 10px 20px;
//   border: solid #00060a 7px;
//   text-decoration: none;
// }

// .btn:hover {
//   background: #ff0000;
//   background-image: -webkit-linear-gradient(top, #ff0000, #ff0000);
//   background-image: -moz-linear-gradient(top, #ff0000, #ff0000);
//   background-image: -ms-linear-gradient(top, #ff0000, #ff0000);
//   background-image: -o-linear-gradient(top, #ff0000, #ff0000);
//   background-image: linear-gradient(to bottom, #ff0000, #ff0000);
//   text-decoration: none;
// }