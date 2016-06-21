import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/app';
// import Sample from './components/Sample/sampleIndex';
import Profile from './components/Profile/profileIndex';
import Upgrade from './components/Upgrade/upgradeIndex';
import Stats from './components/Stats/statsIndex';
import Challenge from './components/Challenge/challengeIndex';
import Tap from './components/Tap/tapindex';

module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Profile} />
      <Route path="/" component={Profile} />
      <Route path="/upgrade" component={Upgrade} />
      <Route path="/stats" component={Stats} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/editprofile" component={Upgrade} />
      <Route path="/tap" component={Tap} />
  </Route>
);
