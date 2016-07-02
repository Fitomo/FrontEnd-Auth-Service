import React, { PropTypes } from 'react';

const Upload = ({ file, src, previewPicture, sendPictureToServer }) => {
  const handleFile = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const fileObj = e.target.files[0];
    if (fileObj) {
      reader.readAsDataURL(fileObj);
    }
    // async
    reader.onload = () => {
      previewPicture(fileObj, reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPictureToServer(file);
    console.log('clicked');
  };

  return (
    <div>
      <h1>Upload your picture</h1>
      <form>
        <input type="file" onChange={handleFile} />
        <input type="submit" onClick={handleSubmit} value="Submit" />
      </form>
      <h6>Preview</h6>
      <img src={src} alt={src} />
    </div>
  );
};

Upload.propTypes = {
  src: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  previewPicture: PropTypes.func.isRequired,
  sendPictureToServer: PropTypes.func.isRequired,
};

export default Upload;
