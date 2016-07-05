import * as actionTypes from '../constants/actionTypes';

export function getStatsRequest() {
  return {
    type: actionTypes.GET_STATS_REQUEST,
    data: null,
  };
}

export function setStats(stats) {
  return {
    type: actionTypes.GET_STATS_SUCCESS,
    stats,
  };
}

export function setStatsFail() {
  return {
    type: actionTypes.GET_STATS_FAIL,
    data: null,
  };
}

export function getStats(userData) {
  const userId = userData.id;
  const device = userData.device;
  const url = `/api/user/${userId}/stats/${device}`;
  return (dispatch) => {
    dispatch(getStatsRequest());
    fetch(url)
    .then((res) => res.json())
    .then((stats) => {
      dispatch(setStats(stats));
    })
    .catch((err) => {
      dispatch(setStatsFail());
      console.error('Error in retrieving user stats:', err);
    });
  };
}
