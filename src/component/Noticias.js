import React, { Component } from 'react'
import imgCard from '../resources/img/56547405_1748178251948598_3273246893278232576_n.svg'
import '../resources/css/main.css'
import '../resources/css/style.css'

class Noticias extends Component {

    constructor(props) {
        super();
        this.state = {
            noticias: props.noticias
        }
    }

    render() {
        return (
            
            <div>
                <div className="container-fluid" style={{ 'background-color': '#F78225' }}>
                    <div>
                        <p className="h1 text-center pb-3 pt-3" style={{ 'color': 'white' }}>Acerca del Ciclismo</p>
                    </div>
                </div>

                <div className="col-9 mx-auto mt-5">

                    <div className="card-deck">


                        <div className="card mb-4">


                            <div className="view overlay">
                                <img className="card-img-top" src={imgCard}
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div className="card-body">

                                <h4 className="card-title">Apertura Tienda</h4>

                                <p className="card-text">Apertura de la tienda ROSSETTI en Neiva</p>

                                <div className="row justify-content-center">

                                    <button type="button" className="btn btn-light-blue btn-md stretched-link"><i
                                        className="fab fa-facebook-f text-white"></i></button>

                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">

                            <div className="view overlay">
                                <img className="card-img-top" src={imgCard}
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div className="card-body">

                                <h4 className="card-title">Apertura Tienda</h4>
                                <p className="card-text">Apertura de la tienda ROSSETTI en Neiva</p>
                                <div className="row justify-content-center">

                                    <button type="button" className="btn btn-light-blue btn-md stretched-link">
                                        <i className="fab fa-instagram text-white"></i></button>

                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">

                            <div className="view overlay">
                                <img className="card-img-top" src={imgCard}

                                    alt="Card image cap" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div className="card-body">

                                <h4 className="card-title">Apertura Tienda</h4>
                                <p className="card-text">Apertura de la tienda ROSSETTI en Neiva</p>
                                <div className="row justify-content-center">

                                    <button type="button" className="btn btn-light-blue btn-md stretched-link"><i
                                        className="fab fa-twitter text-white"></i></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Noticias