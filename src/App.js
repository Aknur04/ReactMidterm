import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post/:postId" component={PostPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

