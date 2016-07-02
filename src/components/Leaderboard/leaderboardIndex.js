import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Leaderboard from './leaderboardPresenter';
// import * as ajaxUtil from '../../util/ajaxUtil';

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
        console.log('thejson', allusers);
        dispatch({ type: 'GET_TOP_USERS_SUCCESS', payload: allusers });
      })
      .catch((err) => {
        console.log('ERR', err);
        dispatch({ type: 'GET_TOP_USERS_FAILURE' });
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
