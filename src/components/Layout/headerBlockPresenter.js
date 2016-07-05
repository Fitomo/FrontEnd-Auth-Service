import React, { PropTypes } from 'react';

const HeaderBlock = ({ headerBlock }) => (
  <div className={headerBlock}></div>
);

export default HeaderBlock;

HeaderBlock.propTypes = {
  headerBlock: PropTypes.string.isRequired,
};
