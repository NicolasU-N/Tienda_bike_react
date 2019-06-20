import React, { Component } from 'react'
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import './resources/css/main.css'; 
import './resources/css/style.css';
import Index from './views/Index';
import Bicicletas from './views/Bicicletas';
import Carrito from './views/Carrito';


class App extends Component  {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/Bicicletas' component={Bicicletas}/>
            <Route exact path='/Carrito' component={Carrito}/>
          </Switch>
      </Router>

    )
  }
}

export default App;
