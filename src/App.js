import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Home';
import Post from '../Post';
import Profile from '../Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
