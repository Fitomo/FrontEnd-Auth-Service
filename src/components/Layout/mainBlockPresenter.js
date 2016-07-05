import React, { PropTypes } from 'react';

const MainBlock = ({ mainBlock }) => (
  <div className={mainBlock}></div>
);

export default MainBlock;

MainBlock.propTypes = {
  mainBlock: PropTypes.string.isRequired,
};
