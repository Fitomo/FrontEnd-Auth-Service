import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/appIndex';
import Profile from './components/Profile/profileIndex';
import Upgrade from './components/Upgrade/upgradeIndex';
import Stats from './components/Stats/statsIndex';
import Challenge from './components/Challenge/challengeIndex';
import Tap from './components/Tap/tapindex';
import Progress from './components/Progress/progressIndex';
import Upload from './components/Upload/uploadIndex';
import Leaderboard from './components/Leaderboard/leaderboardIndex';
import UserProfile from './components/UserProfile/userProfileIndex';

module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Profile} />
      <Route path="/" component={Profile} />
      <Route path="/upgrade" component={Upgrade} />
      <Route path="/stats" component={Stats} />
      <Route path="/progress" component={Progress} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/tap" component={Tap} />
      <Route path="/upload" component={Upload} />
      <Route path="/leader" component={Leaderboard} />
      <Route path="/userprofile/:id" component={UserProfile} />
    </Route>
  </Route>
);
