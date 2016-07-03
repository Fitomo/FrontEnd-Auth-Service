import * as levels from '../constants/expTypes';

module.exports = {
  getPicture: (user) => {
    const attr = {
      RARM: 'N',
      LARM: 'N',
      LLEG: 'N',
      RLEG: 'N',
      ABS: 0,
    };
    if (user.armXp > levels.ARM_XP_LEVEL_1) {
      attr.RARM = 'Y';
    }
    if (user.armXp > levels.ARM_XP_LEVEL_2) {
      attr.RARM = 'Y';
      attr.LARM = 'Y';
    }
    if (user.legXp > levels.LEG_XP_LEVEL_1) {
      attr.RLEG = 'Y';
    }
    if (user.legXp > levels.LEG_XP_LEVEL_2) {
      attr.RLEG = 'Y';
      attr.LLEG = 'Y';
    }
    if (attr.RLEG === 'Y' && attr.LLEG === 'Y' && attr.RARM === 'Y' && attr.LARM === 'Y') {
      if (user.abXp > levels.AB_XP_LEVEL_6) {
        attr.ABS = 6;
      } else if (user.abXp > levels.AB_XP_LEVEL_5) {
        attr.ABS = 5;
      } else if (user.abXp > levels.AB_XP_LEVEL_4) {
        attr.ABS = 4;
      } else if (user.abXp > levels.AB_XP_LEVEL_3) {
        attr.ABS = 3;
      } else if (user.abXp > levels.AB_XP_LEVEL_2) {
        attr.ABS = 2;
      } else if (user.abXp > levels.AB_XP_LEVEL_1) {
        attr.ABS = 1;
      }
    }
    if (attr.RARM === 'N' && attr.LARM === 'N'
        && attr.RLEG === 'N' && attr.LLEG === 'N'
        && attr.ABS === 0) {
      return 'HappyStick.jpg';
    } else {
      return `HappyStickMan-${attr.RARM}RARM-${attr.LARM}LARM-${attr.LLEG}LLEG-${attr.RLEG}RLEG-SIX-${attr.ABS}.jpg`;
    }
  },
};
