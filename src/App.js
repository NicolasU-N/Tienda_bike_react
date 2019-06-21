import React, { Component } from 'react'
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import './resources/css/main.css'; 
import './resources/css/style.css';
import Index from './views/Index';
import Bicicletas from './views/Bicicletas';
import Carrito from './views/Carrito';
import Equipamiento from './views/Equipamiento';
import Repuestos from './views/Repuestos';
import Login from './views/Login';
import Registrar from './views/Registrar';
import Detail from './views/Detail';

class App extends Component  {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/Bicicletas' component={Bicicletas}/>
            <Route exact path='/Carrito' component={Carrito}/>
            <Route exact path='/Equipamiento' component={Equipamiento}/>
            <Route exact path='/Repuestos' component={Repuestos}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Registrar' component={Registrar}/>
            <Route exact path='/Detail' component={Detail}/>
          </Switch>
      </Router>

    )
  }
}

export default App;
