import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ProfilePic from './picPresenter';
import pictureUtil from '../../util/pictureUtil';

function mapStateToProps(state) {
  // console.log('STATE', state);
  const userinfo = state.user;
  const picture = pictureUtil.getPicture(userinfo);
  return {
    userinfo,
    picture,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onPlay: bindActionCreators(actions.sampleAction, dispatch),
//   };
// }

export default connect(mapStateToProps)(ProfilePic);
