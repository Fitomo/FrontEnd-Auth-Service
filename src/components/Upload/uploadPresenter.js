import React, { PropTypes } from 'react';

const Upload = ({ src, previewPicture }) => {
  const handleImage = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    // async
    reader.onload = () => {
      previewPicture(file, reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <div>
      <h1>Upload your picture</h1>
      <form>
        <input type="file" onChange={e => handleImage(e)} />
        <button type="submit" onClick={e => handleSubmit(e)}>Upload Image</button>
      </form>
      <h6>Preview</h6>
      <img src={src} alt={src} />
    </div>
  );
};

Upload.propTypes = {
  src: PropTypes.string.isRequired,
  previewPicture: PropTypes.func.isRequired,
};

export default Upload;
