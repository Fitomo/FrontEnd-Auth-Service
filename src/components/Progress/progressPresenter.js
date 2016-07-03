import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { SHOW_NEXT } from '../../constants/actionTypes';
import {
  sliderParent,
  sliderChild,
  sliderPhoto,
  scrollBar,
  updateProgress,
} from '../../css/main.css';

// import { isoDateFormatter } from '../../util/dateUtil';
// isoDateFormatter(urls[i].createdAt)

const Progress = ({ urls, isFetching, currentPhoto, photos, configs, handleSubmit, handleChange, handleClick }) => {
  const [width, height] = photos[currentPhoto];
  return (
    <section>
      <div className={updateProgress}>
        <button type="submit" onClick={handleSubmit}>Update</button>
      </div>
      <h1>See your progress</h1>
      {configs &&
        <div>
          <div className={scrollBar}>
            <button onClick={handleClick}>Prev</button>
            <input
              type="range" min={0}
              max={photos.length - 1}
              value={currentPhoto}
              onChange={handleChange}
            />
            <button onClick={() => handleClick(SHOW_NEXT)}>Next</button>
          </div>
          <div className={sliderParent}>
            <Motion style={{ height: spring(height), width: spring(width) }}>
              {parentStyle =>
                <div className={sliderChild} style={parentStyle}>
                  {configs.map((style, i) =>
                    <Motion key={i} style={style}>
                      {childStyle =>
                        <img
                          className={sliderPhoto}
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
      {isFetching &&
        <div>Loading...</div>
      }
    </section>
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
