import React, { Component } from 'react'

import '../resources/css/main.css'
import '../resources/css/style.css'

import camisa_1 from '../resources/img/Equipamiento/camisa_1.jpg'
import camisa_2 from '../resources/img/Equipamiento/camisa_2.jpg'
import camisa_4 from '../resources/img/Equipamiento/camisa_4.jpg'



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
                <a href="#"><img src={camisa_1} className="card-img-top" alt="sample photo" /></a>
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body card-body-cascade text-center">

                <a href="" className="text-muted">
                  <h5>Equipamiento</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">Camisa Ciclismo</a>
                  </strong>
                </h4>

                <p className="card-text">Secado rápido Bolsillo trasero Deportes Poliéster Ciclismo de Montaña</p>

                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$30.000 cop</strong>
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
                <a href="#"><img src={camisa_2} className="card-img-top" alt="sample photo" /></a>

                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body card-body-cascade text-center">

                <a href="" className="text-muted">
                  <h5>Equipamiento</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">Camisa Ciclismo</a>
                  </strong>
                </h4>

                <p className="card-text">Secado rápido Bolsillo trasero Deportes Poliéster Ciclismo de Montaña</p>

                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$30.000 cop</strong>
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
                <a href="#"><img src={camisa_4} className="card-img-top" alt="sample photo" /></a>

                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body card-body-cascade text-center">

                <a href="" className="text-muted">
                  <h5>Equipamiento</h5>
                </a>
                <h4 className="card-title">
                  <strong>
                    <a href="">Camisa Ciclismo</a>
                  </strong>
                </h4>

                <p className="card-text">Secado rápido Bolsillo trasero Deportes Poliéster Ciclismo de Montaña</p>

                <div className="card-footer px-1">
                  <span className="float-left font-weight-bold">
                    <strong>$30.000 cop</strong>
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










