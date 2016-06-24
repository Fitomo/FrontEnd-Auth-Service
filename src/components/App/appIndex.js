import { connect } from 'react-redux';
import App from './appPresenter';

function mapStateToProps(state) {
  const currentUserId = state.user.id;
  const user = state.user;
  const auth = state.isAuth;
  return {
    currentUserId,
    user,
    auth,
  };
}

export default connect(mapStateToProps)(App);
