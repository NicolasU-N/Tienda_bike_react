import React, { Component } from 'react'

import '../resources/css/main.css'
import '../resources/css/style.css'


class CabeceraRe extends Component {

  constructor(props) {
    super();
    this.state = {
      cabecerare: props.cabecerare
    }
  }

  render() {
    return (
      <div>
      <h2 class="h1-responsive font-weight-bold text-center my-1 ">Repuestos</h2>

      <p class="grey-text text-center w-responsive mx-auto mb-5">
        Luces<br/>
        Manubrios<br/>
        Pedales
      </p>
      </div>
    )
  }
}

export default CabeceraRe


