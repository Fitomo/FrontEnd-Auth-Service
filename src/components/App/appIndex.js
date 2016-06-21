import { connect } from 'react-redux';
import App from './appPresenter';

function mapStateToProps(state) {
  const currentUserId = state.user.id;
  return {
    currentUserId,
  };
}

export default connect(mapStateToProps)(App);
