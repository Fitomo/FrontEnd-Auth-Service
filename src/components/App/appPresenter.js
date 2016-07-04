import React, { PropTypes } from 'react';
// import React, { Component } from 'react';
import Navbar from '../Navbar/navindex';
import Header from '../Layout/headerPresenter';
import Footer from '../Layout/footerPresenter';
import {
  container,
} from '../../css/main.css';

const App = ({ auth, children, history, user }) => {
  // const authCheck = (auth === 'true' || localStorage.getItem('auth') === 'true' && user.length !== 0);
  const authCheck = (auth === 'false');
  return (
    <div>
      {authCheck &&
        <div className={container} id="container">
          <Header />
          <main>{children}</main>
          <Navbar hist={history} />
          <Footer />
        </div>
      }
      {!authCheck &&
        <div>
          <a href="/auth/fitbit">Fitbit</a>
          <a href="/auth/jawbone">Jawbone</a>
        </div>
      }
    </div>
  );
};

export default App;

App.propTypes = {
  auth: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

// class App extends React.Component {
//   render() {
//     if (this.props.auth === 'false') {
//     // if (this.props.auth === 'true' || localStorage.getItem('auth') === 'true' && this.props.user.length !== 0) {
//       return (
//         <div className={container}>
//           <Header />
//           <main>{this.props.children}</main>
//           <Navbar hist={this.props.history} />
//           <Footer />
//         </div>
//       );
//     } else {
//       return (
//         <section>
//           <a href="/auth/fitbit">FITBIT</a>
//           <a href="/auth/jawbone">JAWBONE</a>
//         </section>
//       );
//     }
//   }
// }
