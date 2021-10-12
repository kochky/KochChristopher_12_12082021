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
import App from './page/App';
import Home from './page/Home'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideBar />
      <Switch>
        <Route path="/user/:id">
          <App />
        </Route>
        <Route >
          <Home />
        </Route>
      </Switch> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



