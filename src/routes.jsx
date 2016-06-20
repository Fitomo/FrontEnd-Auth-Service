import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/app';
// import Sample from './components/Sample/sampleIndex';
import Profile from './components/Profile/profileIndex';
import Upgrade from './components/Upgrade/upgradeIndex';
import Stats from './components/Stats/statsIndex';


module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Profile} />
      <Route path="/" component={Profile} />
      <Route path="/upgrade" component={Upgrade} />
      <Route path="/stats" component={Stats} />
    </Route>
  </Route>
);
