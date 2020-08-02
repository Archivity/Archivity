import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Artmain from './components/Gallery/Art&Craft/Artmain';
import Archi from './components/Gallery/Architec/Architecmain';
import Graphic from './components/Gallery/Graphic/Graphicmain';
import Port from './components/Gallery/Portraits/Portraitsmain';



function App() {
  return (
    <Switch>
  <Route path="/" exact  component={Home} />
  <Route path="/art&craft" exact  component={Artmain} />
  <Route path="/portraits" exact  component={Port} />
  <Route path="/Architectural" exact  component={Archi} />
  <Route path="/graphic" exact  component={Graphic} />
  </Switch>
  );
}

export default App;
