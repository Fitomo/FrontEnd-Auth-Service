import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollTop } = document.body;
    const container = document.querySelector('#container');
    if (scrollTop > 800) {
      container.classList.add('stickyHeader');
    } else {
      container.classList.remove('stickyHeader');
    }
    // console.log(container);
  }

  render() {
    return (
      <header>
        <Link to="/"><div>Fitomo</div></Link>
      </header>
    );
  }
}

export default Header;
