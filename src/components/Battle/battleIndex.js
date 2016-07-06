import { connect } from 'react-redux';
import Battle from './battlePresenter';
import * as actions from '../../actions/index';
import * as ajaxUtil from '../../util/ajaxUtil';

function clearI() {
  for (let i = 1; i < 99999; i++) {
    window.clearInterval(i);
  }
}

function updateUsers(user1, user2, dispatch) {
  ajaxUtil.updateUserInDB(user1, (user) => {
    dispatch(actions.setUser(user));
    dispatch({ type: 'server/addUserOnline', data: user });
  });
  ajaxUtil.updateUserInDB(user2, (user) => {
    dispatch({ type: 'server/addUserOnline', data: user });
  });
}

function dispatchDamage(attacker, reciever, dispatch, context, damage) {
  reciever.health -= Math.ceil(damage / 2);
  dispatch(actions[`${context}SubtractHealth`](Math.ceil(damage / 2)));
  if (reciever.health < 0 || attacker.health < 0) {
    clearI();
    attacker.win = attacker.win + 1;
    attacker.totalXp = attacker.totalXp + 100;
    attacker.distXp = attacker.distXp + 100;
    attacker.health = 100 + (attacker.abXp / 10);

    reciever.lose = reciever.lose + 1;
    reciever.health = 100 + (reciever.abXp / 10);

    if (!attacker.loaded) {
      updateUsers(attacker, reciever, dispatch);
    } else {
      updateUsers(reciever, attacker, dispatch);
    }
    dispatch(actions.setText(''));
    dispatch(actions.showModal({ modalProps: { winner: attacker.username } }));
  }
}

function calculateDamage(attacker, reciever, type, dispatch, context) {
  if (type === 'punch') {
    const damage = Math.ceil(10 * (attacker.armXp / (100 / attacker.level))) + Math.floor(Math.random() * 5);
    const crit = Math.floor(Math.random() * (10));
    if (crit === 5) {
      dispatch(actions.setText(`CRITICAL HIT ! ${attacker.username} ${type}es ${reciever.username} for ${damage * 2} damage!!`));
      dispatchDamage(attacker, reciever, dispatch, context, damage * 2);
    } else {
      dispatch(actions.setText(`${attacker.username} ${type}es ${reciever.username} for ${damage} damage!!`));
      dispatchDamage(attacker, reciever, dispatch, context, damage);
    }
  } else if (type === 'kick') {
    const damage = Math.ceil(10 * (attacker.legXp / (150 / attacker.level))) + Math.floor(Math.random() * 5);
    const crit = Math.floor(Math.random() * (10));
    if (crit === 5) {
      dispatch(actions.setText(`CRITICAL HIT ! ${attacker.username} ${type}s ${reciever.username} for ${damage * 2} damage!!`));
      dispatchDamage(attacker, reciever, dispatch, context, damage * 2);
    } else {
      dispatch(actions.setText(`${attacker.username} ${type}s ${reciever.username} for ${damage} damage!!`));
      dispatchDamage(attacker, reciever, dispatch, context, damage);
    }
  } else if (type === 'flex') {
    dispatch(actions.setText(`${attacker.username} starts ${type}ing! Mirin?`));
  }
}

function mapStateToProps(state) {
  const loaded = state.loadeduser;
  const user = state.user;
  const modalinfo = state.modal;
  const text = state.battleText;

  return {
    loaded,
    user,
    modalinfo,
    text,
  };
}

function mapDispatchToProps(dispatch) {
  let flag = true;
  let flag2 = true;
  return {
    attack: (user, loaded, type) => {
      if (flag) {
        calculateDamage(user, loaded, type, dispatch, 'loaded');
        flag = false;
        flag2 = false;
      } else {
        console.log('recharging stamina');
      }
    },
    startBattle: (user, loaded) => {
      const moves = ['punch', 'kick', 'flex', 'punch', 'kick'];
      setInterval(() => {
        if (!flag2) {
          const move = moves[Math.floor(Math.random() * (5))];
          calculateDamage(loaded, user, move, dispatch, 'user');
          flag = true;
          flag2 = true;
        }
      }, 3000);
    },

    hideModal: () => {
      dispatch(actions.hideModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);

