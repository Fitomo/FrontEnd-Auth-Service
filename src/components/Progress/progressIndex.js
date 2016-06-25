import Progress from './progressPresenter';
import { connect } from 'react-redux';
import { getPictures } from '../../actions/index';

function mapStateToProps(state) {
  const { urls } = state;
  return {
    urls,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUrls: (userId) => dispatch(getPictures(userId)),
  };
}

const progressIndex = connect(mapStateToProps, mapDispatchToProps)(Progress);
export default progressIndex;

