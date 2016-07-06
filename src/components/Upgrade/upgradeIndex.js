import { connect } from 'react-redux';
import Upgrade from './upgradePresenter';

function mapStateToProps(state) {
  const distXp = state.user.distXp;
  const user = state.user;

  return {
    distXp,
    user,
  };
}

export default connect(mapStateToProps)(Upgrade);
