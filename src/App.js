import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import GlobalStyle from './styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
