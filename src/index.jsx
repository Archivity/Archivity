import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Ripple} from 'react-preloaders';

ReactDOM.render(
  <>
   <Ripple
    time={1800}
    color="#00A2E3" 
    background="black"
    
     />
  <Router>
  <App />
 </Router></>
  ,
  document.getElementById('root')
);