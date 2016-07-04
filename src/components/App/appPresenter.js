import React, { Component, PropTypes } from 'react';
// import React, { Component } from 'react';
import Navbar from '../Navbar/navindex';
import Header from '../Layout/headerPresenter';
import Footer from '../Layout/footerPresenter';
import {
  container,
  stickyHeader,
} from '../../css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.isSticky = '';
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollTop } = document.body;
    this.isSticky = scrollTop > 800 ? stickyHeader : '';
    this.forceUpdate();
  }

  render() {
    const { auth, children, history, user } = this.props;
    const authCheck = (auth === 'false'); // disable auth for development purpose
    // const authCheck = (auth === 'true' || localStorage.getItem('auth') === 'true' && user.length !== 0); // uncomment this later
    const { isSticky } = this;
    return (
      <div>
        {authCheck &&
          <div className={container} id="container">
            <Header isSticky={isSticky} />
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
  }
}

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
