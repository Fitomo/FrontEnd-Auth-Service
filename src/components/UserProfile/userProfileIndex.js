import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import UserProfile from './userProfilePresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const loadedUserinfo = state.loadeduser;
  const user = state.user;
  return {
    loadedUserinfo,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (userId) => {
      fetch(`/api/oneuser/${userId}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(actions.setLoadedUser(json));
      });
    },

    addFriend: (loaded, user) => {
      if (user.id !== loaded.id) {
        if (JSON.parse(user.following).indexOf(loaded.id) === -1) {
          const a = JSON.parse(user.following);
          a.push(loaded.id);
          user.following = JSON.stringify(a);
          const b = JSON.parse(loaded.followers);
          b.push(user.id);
          loaded.followers = JSON.stringify(b);
          ajaxUtil.updateUserInDB(user, (userdata) => {
            dispatch(actions.setUser(userdata));
           // dispatch({ type: 'server/addUserOnline', data: userdata });
          });
          ajaxUtil.updateUserInDB(loaded, (loadedUserData) => {
            dispatch(actions.setLoadedUser(loadedUserData));
           // dispatch({ type: 'server/addUserOnline', data: loadedUserData });
          });
        }
      }
    },

    removeFriend: (loaded, user) => {
      if (user.id !== loaded.id) {
        let indexInUser = JSON.parse(user.following).indexOf(loaded.id);
        let indexInLoaded = JSON.parse(loaded.followers).indexOf(user.id);

        if (indexInUser !== -1) {
          const a = JSON.parse(user.following);
          a.splice(indexInUser, 1);
          user.following = JSON.stringify(a);
          const b = JSON.parse(loaded.followers);
          b.splice(indexInLoaded, 1);
          loaded.followers = JSON.stringify(b);

          ajaxUtil.updateUserInDB(user, (userdata) => {
            dispatch(actions.setUser(userdata));
           // dispatch({ type: 'server/addUserOnline', data: userdata });
          });
          ajaxUtil.updateUserInDB(loaded, (loadedUserData) => {
            dispatch(actions.setLoadedUser(loadedUserData));
           // dispatch({ type: 'server/addUserOnline', data: loadedUserData });
          });
        }
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
