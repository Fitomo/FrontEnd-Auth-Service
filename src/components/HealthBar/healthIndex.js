import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import HealthBar from './healthPresenter';

function mapStateToProps(state) {
  const health = state.user.health;
  const health2 = state.loadeduser.health;
  return {
    health,
    health2,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onPlay: bindActionCreators(actions.sampleAction, dispatch),
//   };
// }

export default connect(mapStateToProps)(HealthBar);
