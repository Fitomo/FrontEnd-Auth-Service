import React from 'react';
import Navbar from '../Navbar/navindex';

class App extends React.Component {

  render() {
    if (this.props.auth === 'false') {
      return (
        <div>
          <Navbar hist={this.props.history}/>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <a href="/auth/fitbit">FITBIT</a>
          <a href="/auth/jawbone">JAWBONE</a>
        </div>
      );
    }
  }
}

export default App;

