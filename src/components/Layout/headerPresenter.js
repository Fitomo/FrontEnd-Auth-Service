import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ isSticky }) => (
  <header className={isSticky}>
    <Link to="/" onClick={() => window.location.reload(false)}><div>Fitomo</div></Link>
  </header>
);

export default Header;

Header.propTypes = {
  isSticky: PropTypes.string.isRequired,
};
