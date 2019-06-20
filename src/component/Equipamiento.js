import React, { Component } from 'react'

import '../resources/css/main.css'
import '../resources/css/style.css'

import Venzo from '../resources/img/Equipamiento/Venzo.jpg'
import Ruta from '../resources/img/Equipamiento/Ruta.jpg'
import onTrail from '../resources/img/Equipamiento/onTrail.jpg'



class Equipamiento extends Component {

  constructor(props) {
    super();
    this.state = {
      equipamiento: props.equipamiento
    }
  }

  render() {
    return (
      <div className="text-center my-5 container">

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div className="card card-cascade wider card-ecommerce">

              <div className="view view-cascade overlay">
                <a href="#"><img src={Venzo} className="card-img-top" alt="sample photo" /></a>
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body card-body-cascade text-center">
                <a href="" className="text-muted">
                  <h5>Montaña</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">Venzo</a>
                  </strong>
                </h4>
                <p className="card-text">Bicicleta Venzo Mtb R29 21 velocidades </p>
                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$1'000.000 cop</strong>
                  </span>
                  <span className="float-right">
                    <a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i className="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" className="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
            <div className="card card-cascade wider card-ecommerce">

              <div className="view view-cascade overlay">
                <a href="#"><img src={Ruta} className="card-img-top" alt="sample photo" /></a>

                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>


              <div className="card-body card-body-cascade text-center">

                <a href="" className="text-muted">
                  <h5>Ruta</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">Cinelli</a>
                  </strong>
                </h4>

                <p className="card-text">Bicicleta Ruta Carbono Cinelli, Ultegra 11 V</p>

                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$2'000.000</strong>
                  </span>
                  <span className="float-right">
                    <a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i className="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" className="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card card-cascade wider card-ecommerce">
              <div className="view view-cascade overlay">
                <a href="#"><img src={onTrail} className="card-img-top" alt="sample photo" /></a>
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body card-body-cascade text-center">
                <a href="" className="text-muted">
                  <h5>Montaña</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">On Trail</a>
                  </strong>
                </h4>
                <p className="card-text">27.5 Mtb, 21 Vel</p>
                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$700.000 cop</strong>
                  </span>
                  <span className="float-right">
                    <a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i className="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" className="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    )
  }
}

export default Equipamiento










