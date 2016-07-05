// export function battle(p1, p2, sock1, sock2, cb) {
//   const p1Moves = {
//     punch: Math.ceil(500 * (p1.armXp / (1000 / p1.level))),
//     kick: Math.ceil(10 * (p1.legXp / (1000 / p1.level))),
//     defend: p1.abXp,
//     health: p1.health,
//   };
//   const p2Moves = {
//     punch: Math.ceil(5 * (p2.armXp / (1000 / p2.level))),
//     kick: Math.ceil(10 * (p2.legXp / (1000 / p2.level))),
//     defend: p2.abXp,
//     health: p2.health,
//   };

//   attackLoop(false, p1Moves, p2Moves);
//   cb();
// }

// function attackLoop(flag, p1, p2) {
//   while (p1.health > 0 && p2.health > 0) {
//     p1Move(p1, p2);
//   }
//   console.log('done...');
// }

// function p1Move(p1, p2) {
//   let playerMove = prompt('CHOOSE YOUR MOVE: PUNCH, KICK, DEFEND').toUpperCase();
//   let damage = 0;
//   if (playerMove === '') {
//     p1Move();
//   } else {
//     switch (playerMove) {
//     case 'PUNCH':
//       damage = p1.punch;
//       break;
//     case 'KICK':
//       damage = p1.kick;
//       break;
//     case 'DEFEND':
//       damage = p1.defend;
//       break;
//     default:
//       p1Move(p1, p2);
//       break;
//     }
//   }
//   p2.health = p2.health - damage;
//   console.log('p2', p2, damage);
// }


