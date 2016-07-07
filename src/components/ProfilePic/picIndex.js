import { connect } from 'react-redux';
import ProfilePic from './picPresenter';
import pictureUtil from '../../util/pictureUtil';

function mapStateToProps(state) {
  const userinfo = state.user;
  const picture = pictureUtil.getPicture(userinfo);

  return {
    userinfo,
    picture,
  };
}

export default connect(mapStateToProps)(ProfilePic);
