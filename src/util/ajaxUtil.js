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


export function calcXpFromFitbit(data, dispatch, callback) {
  const date = moment().format('YYYY-MM-DD');
  let userdata = data;
  userdata.startDate = date;
  userdata.endDate = date;

  const query = queryString.stringify(userdata);
  fetch(`http://127.0.0.1:8000/api/fitbit/?${query}`)
  .then((response) => {
    return response.json();
  })
  .then((fitbitdata) => {
    console.log('FITBITDATA', fitbitdata);
    if (userdata.date !== fitbitdata[0].date) {
      
      // CalculateXP based on weight scaled-calories burned
      const calXp = Math.floor((fitbitdata[0].calories * (fitbitdata[0].weight / 100)) / 400);
      // CalculateXP based on step data
      userdata.totalXp = userdata.totalXp + Math.floor(fitbitdata[0].steps / 1000) + calXp;
      userdata.distXp = userdata.distXp + Math.floor(fitbitdata[0].steps / 1000) + calXp;
      userdata.steps = fitbitdata[0].steps % 1000;

      //Set calories and weight
      userdata.calories = fitbitdata[0].calories % 1000;
      userdata.weight = fitbitdata[0].weight;
      userdata.date = moment().format('YYYYMMDD');


      updateUserInDB(userdata, (updatedUser) => {
        dispatch(actions.setUser(updatedUser));
        dispatch({ type: 'server/addUserOnline', data: updatedUser });
        callback();
      });
    } else {
      const diffStep = fitbitdata[0].steps - userdata.steps;
      const diffCal = fitbitdata[0].calories - userdata.calories;
      if (diffStep >= 1000) {
        userdata.totalXp = userdata.totalXp + Math.floor(diffStep / 1000);
        userdata.distXp = userdata.distXp + Math.floor(diffStep / 1000);
        userdata.steps = fitbitdata[0].steps;
      }
      if (diffCal >= 1000) {
        userdata.totalXp = userdata.totalXp + Math.floor((diffCal * (fitbitdata[0].weight / 100)) / 400);
        userdata.distXp = userdata.distXp + Math.floor((diffCal * (fitbitdata[0].weight / 100)) / 400);
        userdata.calories = fitbitdata[0].calories;
      }

      const xpGained = Math.floor(diffStep / 1000) + Math.floor((diffCal * (fitbitdata[0].weight / 100)) / 400);
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
