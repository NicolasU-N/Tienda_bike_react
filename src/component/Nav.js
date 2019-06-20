import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Logo from '../resources/img/Logo.svg'


class Nav extends Component {

    constructor(props){
        super(props);
        this.state={            
          nav: props.nav,
          redirect: undefined          
        }
        this.onClick = this.onClick.bind(this) 
    }

    async onClick(url){
      const pathname = window.location.pathname
      if(url!== pathname){
        this.setState({
          redirect:url
        })
      }
    }

    render(){
      if(this.state.redirect){
        return(
          <Redirect to={this.state.redirect}/>
        )
      }
        return( 
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top position-sticky text-center">
              <a className="navbar-brand" onClick={()=> this.onClick('/')}>
              <img className='animation-logo' src={Logo} /> </a>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={()=> this.onClick('/Bicicletas')}>Bicicletas <span className="sr-only">(current)</span></a>
                  </li>
                  <div className="dropdown">
                    <a className="nav-link active dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      Productos
                    </a>
                    <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="repuestos.html">Repuestos</a>
                      <a className="dropdown-item" href="equipamiento.html">Equipamiento</a>
                    </div>
                  </div>
                  
                  
                  <li className="nav-item active">
                    <a className="nav-link" href="login.html"> <i className="icon icon-user">
                      </i></a>
                  </li>
          
                  <li className="nav-item active">
                    <a className="nav-link" onClick={()=> this.onClick('/Carrito')}> <i className="icon icon-shopping">
                      </i></a>
                  </li>
                </ul>
              </div>
            </nav>   
        
        )}
}

export default Nav
