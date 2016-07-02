import React, { Component, PropTypes } from 'react';
import Progress from './progressPresenter';
import { connect } from 'react-redux';
import { getPictures, setCurrentPhoto, configurePhotos } from '../../actions/index';
import { SHOW_NEXT } from '../../constants/actionTypes';

class ProgressContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPictures(15)); // later require to pass in userId (must be integer) for grabbing particular user images; 15 is the default value
    dispatch(setCurrentPhoto(0));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(getPictures(15)); // pass in userId (integer)
  }

  handleChange({ target: { value } }) {
    const { dispatch } = this.props;
    dispatch(setCurrentPhoto(parseInt(value, 10)));
    dispatch(configurePhotos());
  }

  handleClick(button) {
    const { dispatch, currentPhoto, photos } = this.props;

    let photoIndex = button === SHOW_NEXT ? currentPhoto + 1 : currentPhoto - 1;
    photoIndex = photoIndex >= 0 ? photoIndex : photos.length - 1;
    photoIndex = photoIndex >= photos.length ? 0 : photoIndex;

    dispatch(setCurrentPhoto(parseInt(photoIndex, 10)));
    dispatch(configurePhotos());
  }

  render() {
    const { handleSubmit, handleChange, handleClick, props } = this;
    return (
      <Progress
        {...props}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    );
  }
}

function mapStateToProps({ progress }) {
  return { ...progress };
}

ProgressContainer.defaultProps = {
  isFetching: false,
  urls: [],
  photos: [[800, 600]],
  currentPhoto: 0,
  configs: [],
};

ProgressContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  currentPhoto: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ProgressContainer);
