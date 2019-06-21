import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../resources/css/main.css'
import '../resources/css/style.css'




class Login extends Component {

  constructor(props) {
    super();
    this.state = {
      login: props.login,
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

  render() {
    if(this.state.redirect){
      return(
        <Redirect to={this.state.redirect}/>
      )
    }

    return (
      <div class="container">
        <form class="border border-light p-5">
          <p class="h4 mb-4 text-center">Ingreso</p>

          <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Correo" />

          <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Contraseña" />

          <div class="d-flex justify-content-between">
            <div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                <label class="custom-control-label" for="defaultLoginFormRemember">Recuerdame</label>
              </div>
            </div>
            <div>onClick={()=> this.onClick('/')}
              <a href="#">¿Olvidaste la contraseña?</a>
            </div>
          </div>

          <button class="btn btn-primary btn-block my-4" id="enviar" type="submit">Ingresar</button>

          <div class="text-center">
            <p>¿No tienes cuenta?
          <a href="registrar.html">Registrate</a>
            </p>

            <p>O accede con:</p>

            <a type="button" class="light-blue-text mx-2">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </form>
      </div>

    )
  }
}

export default Login
