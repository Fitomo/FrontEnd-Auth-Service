import { connect } from 'react-redux';
import Navbar from './Navbar';
import * as actions from '../../actions/index';

function mapStateToProps(state) {
  const currentUserId = state.user.id;
  const user = state.user;
  return {
    currentUserId,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: (user) => {
      user.id = undefined;
      dispatch(actions.logoff());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
