import React, { Component } from 'react'

import '../resources/css/main.css'
import '../resources/css/style.css'

import luces from '../resources/img/Repuestos/luces.svg'
import pedales from '../resources/img/Repuestos/pedales.svg'
import manubrios from '../resources/img/Repuestos/manubrios.svg'


class Repuestos extends Component {

  constructor(props) {
    super();
    this.state = {
     repuestos: props.repuestos
    }
  }

  render() {
    return (
      <section class="text-center my-5 container">

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div class="card card-cascade wider card-ecommerce">
              <div class="view view-cascade overlay">
                <a href="#"><img src={luces} class="card-img-top" alt="sample photo" /></a>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body card-body-cascade text-center">
                <a href="" class="text-muted">
                  <h5>Repuestos</h5>
                </a>
                <h4 class="card-title">
                  <strong>
                    <a href="">Luces</a>
                  </strong>
                </h4>
                <p class="card-text">Luces led reflectantes</p>
                <div class="card-footer px-1">
                  <span class="float-left font-weight-bold">
                    <strong>$20.000 cop</strong>
                  </span>
                  <span class="float-right">
                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i class="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" class="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>
            </div>
          </div>



          <div class="col-lg-4 col-md-6 mb-lg-0 mb-4">
            <div class="card card-cascade wider card-ecommerce">
              <div class="view view-cascade overlay">
                <a href="#"><img src={pedales} class="card-img-top" alt="sample photo" /></a>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body card-body-cascade text-center">
                <a href="" class="text-muted">
                  <h5>Repuestos</h5>
                </a>
                <h4 class="card-title">
                  <strong>
                    <a href="">Pedales Venzo</a>
                  </strong>
                </h4>
                <p class="card-text">Venzo Flat Bmx Mountain Bicycle</p>
                <div class="card-footer px-1">
                  <span class="float-left font-weight-bold">
                    <strong>$100.000</strong>
                  </span>
                  <span class="float-right">
                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i class="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" class="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div class="col-lg-4 col-md-6">

            <div class="card card-cascade wider card-ecommerce">

              <div class="view view-cascade overlay">
                <a href="#"><img src={manubrios} class="card-img-top" alt="sample photo" /></a>

                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body card-body-cascade text-center">
             
               <a href="" class="text-muted">
                  <h5>Manubrio</h5>
                </a>
                <h4 class="card-title">
                  <strong>
                    <a href="">Manubrios freestyle Bmx</a>
                  </strong>
                </h4>
                <p class="card-text">Manubrios freestyle Bmx</p>
                <div class="card-footer px-1">
                  <span class="float-left font-weight-bold">
                    <strong>$60.000 cop</strong>
                  </span>
                  <span class="float-right">
                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" href="#">
                      <i class="fas fa-shopping-cart ml-3"></i>
                    </a>
                    <a href="#" class="badge badge-primary badge-pill ml-3">1</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Repuestos










