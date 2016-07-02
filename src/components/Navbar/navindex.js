import { connect } from 'react-redux';
import Navbar from './Navbar';
import * as actions from '../../actions/index';

function mapStateToProps(state) {
  const currentUserId = state.user.id;
  const user = state.user;
  const socket = state.socket;
  const statetree = state;

  return {
    currentUserId,
    user,
    socket,
    statetree,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: (user) => {
      user.id = undefined;
      dispatch(actions.logoff());
    },
    loadData: (userId) => {
      fetch('/api/oneuser/'+userId)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch(actions.setLoadedUser(json));
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
