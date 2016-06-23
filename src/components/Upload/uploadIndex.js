import Upload from './uploadPresenter';
import { connect } from 'react-redux';
import { setPicture } from '../../actions/index';

function mapStateToProps(state) {
  const { file, src } = state.upload;
  return {
    file,
    src,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleImage: (e) => {
      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      if (file) {
        reader.readAsDataURL(file);
      }

      reader.onloadend = () => {
        dispatch(setPicture(file, reader.result));
      };
    },
    handleSubmit: (e) => {
      e.preventDefault();
      console.log('clicked');
    },
  };
}

const uploadIndex = connect(mapStateToProps, mapDispatchToProps)(Upload);
export default uploadIndex;
