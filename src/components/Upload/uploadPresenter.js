import React, { PropTypes } from 'react';
import {
  inputFile,
  uploadSubmit,
  selected,
} from '../../css/main.css';

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
    sendPictureToServer(file, 15); // pass userId (integer)
    console.log('clicked');
  };

  return (
    <section>
      <h1>Upload your picture</h1>
      <form>
        <div>
          <input type="file" onChange={handleFile} id="_file" className={inputFile} />
          <label htmlFor="_file">
            {!file.name &&
              <div>Choose a file</div>
            }
            {file.name &&
              <div>{file.name}</div>
            }
          </label>
        </div>
        <div>
          <input type="submit" onClick={handleSubmit} id="_submit" className={uploadSubmit} />
          <label htmlFor="_submit">
            <div>Submit</div>
          </label>
        </div>
      </form>
      <div className={selected}>
        {src &&
          <div>Selected&#58;</div>
        }
        <img src={src} alt={src} />
      </div>
    </section>
  );
};

Upload.defaultProps = {
  file: {},
  src: '',
};

Upload.propTypes = {
  src: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  previewPicture: PropTypes.func.isRequired,
  sendPictureToServer: PropTypes.func.isRequired,
};

export default Upload;
