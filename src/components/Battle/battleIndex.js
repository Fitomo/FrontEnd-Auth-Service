import { connect } from 'react-redux';
import Battle from './battlePresenter';

function mapStateToProps(state) {
  const loaded = state.loadeduser;
  const user = state.user;
  return {
    loaded,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attack: (user, loaded, type) => {
      if (type === 'punch') {
        const damage = Math.ceil(500 * (user.armXp / (1000 / user.level)));
         
      } else if (type === 'kick') {
        const damage = Math.ceil(10 * (loaded.legXp / (1000 / loaded.level)));
      
      } else if (type === 'defend') {
        const defense = user.abXp;
      
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);

