import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './componants/Header';
import reportWebVitals from './reportWebVitals';
import SideBar from './componants/SideBar';
import App from './componants/App';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <SideBar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
