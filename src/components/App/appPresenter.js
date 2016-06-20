import React from 'react';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {
  render() {
    if (this.props.currentUserId) {
      return (
        <div>
          <Navbar />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <a href="/login">Please login</a>
        </div>
      );
    }
  }
}

export default App;
