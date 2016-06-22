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


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Profile} />
    <Route path="/" component={Profile} />
    <Route path="/upgrade" component={Upgrade} />
    <Route path="/stats" component={Stats} />
    <Route path="/challenge" component={Challenge} />
    <Route path="/progress" component={Progress} />
    <Route path="/upload" component={Upload} />
    <Route path="/editprofile" component={Upgrade} />
    <Route path="/tap" component={Tap} />
  </Route>
);
