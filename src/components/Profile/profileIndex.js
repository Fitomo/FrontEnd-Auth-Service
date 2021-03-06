import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Profile from './profilePresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const userinfo = state.user;
  const modalinfo = state.modal;

  return {
    userinfo,
    modalinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendData: (user, username, name) => {
      user.username = username;
      user.name = name;

      ajaxUtil.updateUserInDB(user, (json) => {
        dispatch(actions.setUser(json));
        dispatch(actions.hideModal());
        dispatch({ type: 'server/addUserOnline', data: json });
      });
    },
    showModal: () => {
      dispatch(actions.showModal({ modalProps: { xpcalc: 0 } }));
    },

    hideModal: () => {
      dispatch(actions.hideModal());
    },

    sync: (data) => {
      ajaxUtil.calcXpFromDevice(data, dispatch, (xpGained) => {
        console.log('Total XP Gained', xpGained);
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
