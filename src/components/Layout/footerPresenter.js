import React, { PropTypes } from 'react';

const Footer = ({ isSticky }) => (
  <footer className={isSticky}>
    <div>&copy;2016 Fitomo</div>
  </footer>
);

export default Footer;

Footer.propTypes = {
  isSticky: PropTypes.string.isRequired,
};
