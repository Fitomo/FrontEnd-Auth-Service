import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Leaderboard from './leaderboardPresenter';

function mapStateToProps(state) {
  const leaderboard = state.leaderboard;
  const user = state.user;
  return {
    leaderboard,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEntry: (limit, offset) => {
      fetch(`/api/all/${limit}/${offset}`)
      .then((res) => res.json())
      .then((allusers) => {
        dispatch(actions.getTopUsers(allusers));
      })
      .catch((err) => {
        dispatch(actions.getTopUsersFail(err));
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
