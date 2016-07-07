import React, { PropTypes } from 'react';
import About from '../About/aboutPresenter';

const Footer = ({ isSticky, aboutUs, copyright }) => (
  <footer className={isSticky}>
    <About aboutUs={aboutUs} />
    <div><span className={copyright}>&copy;</span>2016 Fitomo. All Rights Reserved</div>
  </footer>
);

export default Footer;

Footer.propTypes = {
  isSticky: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};
