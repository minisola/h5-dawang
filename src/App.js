import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Form from './pages/Form'
import './css/app.scss';

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/form'  component={Form} />
          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
