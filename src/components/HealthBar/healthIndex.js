import { connect } from 'react-redux';
import HealthBar from './healthPresenter';

function mapStateToProps(state) {
  const health = state.user.health;
  const health2 = state.loadeduser.health;
  return {
    health,
    health2,
  };
}

export default connect(mapStateToProps)(HealthBar);
