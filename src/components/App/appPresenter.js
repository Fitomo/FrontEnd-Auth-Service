import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Navbar from '../Navbar/navindex';
import Header from '../Layout/headerPresenter';
import Footer from '../Layout/footerPresenter';
import HeaderBlock from '../Layout/headerBlockPresenter';
import MainBlock from '../Layout/mainBlockPresenter';
import {
  container,
  headerBlock,
  mainBlock,
  stickyActive,
  footerActive,
} from '../../css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.isSticky = '';
    this.isFooter = '';
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    console.dir(e);
    
    const { scrollTop } = document.body;
    const fScroll = 3350;
    const hScroll = 750;
    const reRender = (
      (scrollTop > hScroll && scrollTop < hScroll + 100) || (scrollTop < hScroll && scrollTop > hScroll - 100) ||
      (scrollTop > fScroll && scrollTop < fScroll + 100) || (scrollTop < fScroll && scrollTop > fScroll - 100)
    );
    this.isSticky = scrollTop > hScroll ? stickyActive : '';
    this.isFooter = scrollTop > fScroll ? footerActive : '';
    if (reRender) this.setState({}); // trigger component re-rendering
  }

  render() {
    const { auth, children, history, user } = this.props;
    const { isSticky, isFooter } = this;
    const authCheck = (auth === 'false'); // disable auth for development purpose; comment this out in production
    // const authCheck = (auth === 'true' || localStorage.getItem('auth') === 'true' && user.length !== 0); // uncomment this in production
    const childrenWithProps = Children.map(children, (child) => cloneElement(child, { isSticky })); // passing props to child components
    const classnames = `${container} ${isSticky}`; // add multiple class names
    return (
      <div>
        {authCheck &&
          <div className={classnames}>
            {isSticky &&
              <HeaderBlock headerBlock={headerBlock} />
            }
            {!isFooter &&
              <Header isSticky={isSticky} />
            }
            <MainBlock mainBlock={mainBlock} />
            <main className={isSticky}>{childrenWithProps}</main>
            <Navbar isSticky={isSticky} isFooter={isFooter} hist={history} />
            <MainBlock mainBlock={mainBlock} />
            <Footer isSticky={isSticky} />
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
