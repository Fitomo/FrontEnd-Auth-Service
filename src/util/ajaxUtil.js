import queryString from 'query-string';
import moment from 'moment';
import * as actions from '../actions/index';

export function updateUserInDB(data, callback) {
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    fetch(`/api/user/${data.id}`)
    .then((response) => {
      return response.json();
    })
    .then((userdata) => {
      callback(userdata);
    });
  });
}


export function calcXpFromDevice(data, dispatch, callback) {
  const date = moment().format('YYYY-MM-DD');
  let userdata = data;
  userdata.startDate = date;
  userdata.endDate = date;
  const query = queryString.stringify(userdata);

  console.log('hey', data.device);
  let url = '';
  if (data.device === 'Fitbit') {
    url = `http://127.0.0.1:8000/api/fitbit/update/?${query}`;
  } else if (data.device === 'Jawbone') {
    url = `http://127.0.0.1:8000/api/jawbone/update/?${query}`;
  }
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((deviceData) => {
    console.log('deviceData', deviceData);
    if (Number(userdata.date) !== deviceData[0].date) {
      if (deviceData[0].weight === null) {
        deviceData[0].weight = 80;
      }
      // CalculateXP based on weight scaled-calories burned
      const calXp = Math.floor((deviceData[0].calories * (deviceData[0].weight / 100)) / 400);
      // CalculateXP based on step data
      userdata.totalXp = userdata.totalXp + Math.floor(deviceData[0].steps / 1000) + calXp;
      userdata.distXp = userdata.distXp + Math.floor(deviceData[0].steps / 1000) + calXp;
      userdata.steps = deviceData[0].steps;

      // CalculateXP based on sleep and heartrate
      if (data.device === 'Jawbone') {
        if (deviceData[0].restingHR === null) {
          deviceData[0].restingHR = 75;
        }
        userdata.totalXp = userdata.totalXp + Math.floor((deviceData[0].restingHR / 75) * deviceData[0].totalSleep);
        userdata.distXp = userdata.distXp + Math.floor((deviceData[0].restingHR / 75) * deviceData[0].totalSleep);
      }

      //Set calories and weight
      userdata.calories = deviceData[0].calories % 1000;
      userdata.weight = deviceData[0].weight;
      userdata.date = moment().format('YYYYMMDD');

      const xpGained = Math.floor(deviceData[0].steps / 1000) + calXp;

      updateUserInDB(userdata, (updatedUser) => {
        dispatch(actions.setUser(updatedUser));
        dispatch({ type: 'server/addUserOnline', data: updatedUser });
        callback(xpGained);
      });
    } else {
      const diffStep = deviceData[0].steps - userdata.steps;
      const diffCal = deviceData[0].calories - userdata.calories;

      if (diffStep >= 1000) {
        userdata.totalXp = userdata.totalXp + Math.floor(diffStep / 1000);
        userdata.distXp = userdata.distXp + Math.floor(diffStep / 1000);
        userdata.steps = deviceData[0].steps;
      }
      if (diffCal >= 1000) {
        if (deviceData[0].weight === null) {
          deviceData[0].weight = 80;
        }
        userdata.totalXp = userdata.totalXp + Math.floor((diffCal * (deviceData[0].weight / 100)) / 400);
        userdata.distXp = userdata.distXp + Math.floor((diffCal * (deviceData[0].weight / 100)) / 400);
        userdata.calories = deviceData[0].calories;
      }

      const xpGained = Math.floor(diffStep / 1000) + Math.floor((diffCal * (deviceData[0].weight / 100)) / 400);
      updateUserInDB(userdata, (updatedUser) => {
        dispatch(actions.setUser(updatedUser));
        dispatch({ type: 'server/addUserOnline', data: updatedUser });
        callback(xpGained);
      });
    }
  })
  .catch((err) => {
    console.log('ERR', err);
  });
}


