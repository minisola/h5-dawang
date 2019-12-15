import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PageIndex from './pages/index'
import PageForm from './pages/form'
import './css/App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={PageIndex} />
            <Route path='/form'  component={PageForm} />
          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
