import { connect } from 'react-redux';
import Navbar from './Navbar';
import { browserHistory } from 'react-router';
import * as actions from '../../actions/index';

function mapStateToProps(state) {
  console.log('state', state);
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
      console.log('hey', user);
      user.id = undefined;
      dispatch(actions.logoff());
     // browserHistory.push('/');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
