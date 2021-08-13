import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Header from './componants/Header';
import SideBar from './componants/SideBar';
import App from './App';
import Home from './Home'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:id">
          <App />
        </Route>
      </Switch> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



