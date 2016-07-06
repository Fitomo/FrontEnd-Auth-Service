import * as actionTypes from '../constants/actionTypes';

export function getStatsRequest(stats) {
  return {
    type: actionTypes.GET_STATS_REQUEST,
    stats,
  };
}

export function setStats(stats) {
  return {
    type: actionTypes.GET_STATS_SUCCESS,
    stats,
  };
}

export function setStatsFail(stats) {
  return {
    type: actionTypes.GET_STATS_FAIL,
    stats,
  };
}

export function getStats(userData) {
  const userId = userData.id;
  const device = userData.device;
  const url = `/api/user/${userId}/stats/${device}`;
  return (dispatch) => {
    dispatch(getStatsRequest({}));
    fetch(url)
    .then((res) => res.json())
    .then((stats) => {
      dispatch(setStats(stats));
    })
    .catch((err) => {
      dispatch(setStatsFail({}));
      console.error('Error in retrieving user stats:', err);
    });
  };
}
