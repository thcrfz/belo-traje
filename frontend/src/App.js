import React from 'react';

import Home from './pages/home';
import Register from './pages/register';
import Profile from './pages/Profile';
import Card from './pages/card';

import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/card" component={Card}/>
    </Switch>
  );
}

export default App;
