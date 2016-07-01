import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { SHOW_NEXT } from '../../constants/actionTypes';
import { parent, child, photo, scrollBar, heading, update } from '../../style/styles.css';

// import { isoDateFormatter } from '../../util/dateUtil';
// isoDateFormatter(urls[i].createdAt)

const Progress = ({ urls, isFetching, currentPhoto, photos, configs, handleSubmit, handleChange, handleClick }) => {
  const [width, height] = photos[currentPhoto];
  return (
    <div>
      <h1 className={heading}>See your progress</h1>
      {configs &&
        <div>
          <div className={scrollBar}>
            <button onClick={handleClick}>Previous</button>
            <input
              type="range" min={0}
              max={photos.length - 1}
              value={currentPhoto}
              onChange={handleChange}
            />
            <button onClick={() => handleClick(SHOW_NEXT)}>Next</button>
          </div>
          <div className={parent}>
            <Motion style={{ height: spring(height), width: spring(width) }}>
              {parentStyle =>
                <div className={child} style={parentStyle}>
                  {configs.map((style, i) =>
                    <Motion key={i} style={style}>
                      {childStyle =>
                        <img
                          className={photo}
                          src={urls[i].url}
                          alt={urls[i].url}
                          style={childStyle}
                        />
                      }
                    </Motion>
                  )}
                </div>
              }
            </Motion>
          </div>
        </div>
      }
      <div className={update}>
        <button type="submit" onClick={handleSubmit}>Update your progress</button>
      </div>
      {isFetching &&
        <div>Loading...</div>
      }
    </div>
  );
};

Progress.propTypes = {
  urls: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  currentPhoto: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  configs: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Progress;
