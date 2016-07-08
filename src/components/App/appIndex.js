import { connect } from 'react-redux';
import App from './appPresenter';

function mapStateToProps({ user, isAuth }) {
  return { user, isAuth };
}

export default connect(mapStateToProps)(App);
