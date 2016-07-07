import React, { PropTypes } from 'react';

const MainBlock = ({ mainBlock }) => (
  <section className={mainBlock}>
    <div></div>
  </section>
);

export default MainBlock;

MainBlock.propTypes = {
  mainBlock: PropTypes.string.isRequired,
};
