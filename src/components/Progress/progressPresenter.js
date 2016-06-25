import React, { PropTypes } from 'react';

// const Progress = ({ getUrls, urls }) => {
const Progress = ({ getUrls }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getUrls(15); // pass in userId
    console.log('clicked');
  };

  return (
    <div>
      <h1>See your progress</h1>
      {/*urls.map((url) => <img src={url} alt={url} />)*/}
      <button type="submit" onClick={handleSubmit}>Update</button>
    </div>
  );
};

Progress.propTypes = {
  getUrls: PropTypes.func.isRequired,
  // urls: PropTypes.array.isRequired,
};

export default Progress;
