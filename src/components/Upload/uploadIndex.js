import Upload from './uploadPresenter';
import { connect } from 'react-redux';
import { setPicture, sendPicture } from '../../actions/index';

function mapStateToProps(state) {
  const { file, src } = state.upload;
  return {
    file,
    src,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    previewPicture: (file, src) => dispatch(setPicture(file, src)),
    sendPictureToServer: (file) => dispatch(sendPicture(file)),
  };
}

const uploadIndex = connect(mapStateToProps, mapDispatchToProps)(Upload);
export default uploadIndex;
