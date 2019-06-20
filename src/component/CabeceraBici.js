import React, { Component } from 'react'
import '../resources/css/main.css'
import '../resources/css/style.css'

class CabeceraBici extends Component {

  constructor(props) {
    super();
    this.state = {
      cabecerabici: props.noticias
    }
  }

  render(){
    return(
      <div>
      <h2 className="h1-responsive font-weight-bold text-center my-1 ">Montaña</h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5"><br />Llantas reflectantes<br />
          Luces delanteras y traseras*<br />
          Inmovilizador de rueda trasera antirrobo*<br />
          Pedales de plataforma reflectantes con una gran adherencia</p>        
      </div>
    )
  }
}

export default CabeceraBici
