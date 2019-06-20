import React, { Component } from 'react'
import '../resources/css/main.css'
import '../resources/css/style.css'

class CabeceraEqui extends Component {

  constructor(props) {
    super();
    this.state = {
      cabeceraequi: props.noticias
    }
  }

  render() {
    return (
      <div>
        <h2 class="h1-responsive font-weight-bold text-center my-1 ">Equipamiento</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">
          Ropa deportiva<br />
          Cascos<br />
          Accesorios
        </p>
      </div>
    )
  }
}

export default CabeceraEqui



