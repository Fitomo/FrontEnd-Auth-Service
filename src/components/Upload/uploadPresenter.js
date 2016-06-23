import React, { PropTypes } from 'react';

const Upload = ({ src, handleImage, handleSubmit }) => (
  <div>
    <h1>Upload your picture</h1>
    <div>
      <form>
        <input type="file" onChange={e => handleImage(e)} />
        <button type="submit" onClick={e => handleSubmit(e)}>Upload Image</button>
      </form>
      <h6>preview</h6>
      <img src={src} alt={src} />
    </div>
  </div>
);

Upload.propTypes = {
  src: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Upload;
