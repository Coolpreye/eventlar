import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </React.Fragment>
  );
}

export default App;
