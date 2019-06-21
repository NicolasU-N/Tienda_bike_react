import React, { Component } from 'react'
import '../resources/css/main.css'
import '../resources/css/style.css'

class Login extends Component {

  constructor(props) {
    super();
    this.state = {
      login: props.login
    }
  }

  render() {
    return (
      <div class="container">
        <form class="border border-light p-5">

          <p class="h4 mb-4 text-center">Registrar</p>

          <input type="text" id="defaultRegisterFormFirstName" class="form-control my-3" placeholder="Nombre" />

          <input type="text" id="defaultRegisterFormLastName" class="form-control my-3" placeholder="Apellidos" />

          <input type="email" id="defaultRegisterFormEmail" class="form-control mb-5" placeholder="Correo" />

          <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Contraseña"
            aria-describedby="defaultRegisterFormPasswordHelpBlock" />

          <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">Longitud mínima de 8
        caracteres</small>

          <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Numero de celular"
            aria-describedby="defaultRegisterFormPhoneHelpBlock" />

          <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">Opcional</small>

          <button class="btn btn-info my-4 btn-block" type="submit">Registrar</button>

          <div class="text-center">
            <p>Registrar con:</p>

            <a type="button" class="light-blue-text mx-2">
              <i class="fab fa-google"></i>
            </a>
            <hr />
            <p>Haciendo click en registrar:
          <em>Registrar</em> estas de acuerdo con nuestro
          <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX" target="_blank">términos de
            servicio</a> y
          <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX" target="_blank">términos de
            servicio</a>.
        </p>
          </div>
        </form>
      </div>


    )
  }
}

export default Login
