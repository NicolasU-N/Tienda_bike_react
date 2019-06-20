import React, { Component } from 'react'

import '../resources/css/main.css'
import '../resources/css/style.css'

import Venzo from '../resources/img/Bicicletas/Venzo.jpg'

import camisa1 from "../resources/img/Equipamiento/camisa_1.jpg"
import guantes from "../resources/img/Equipamiento/camisa_4.jpg"


class Carrito extends Component {

  constructor(props) {
    super();
    this.state = {
      carrito: props.carrito
    }
  }

  render() {
    return (
      <section className="section-content bg padding-y my-5">
        <div className="container-fluid">
          <div className="row">
            <main className="col-sm-9">
              <div className="card">
                <table className="table table-hover shopping-cart-wrap">
                  <thead className="text-muted">
                    <tr>
                      <th scope="col" className="text-center">Producto</th>
                      <th scope="col"  className="text-center">Cantidad</th>
                      <th scope="col" width="200" className="text-center">Precio</th>
                      <th scope="col" width="170" className="text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="media">
                          <div className="img-wrap ">
                            <img src={Venzo} className="img-thumbnail img-sm w-75" />
                          </div>
                          <figcaption className="media-body">
                            <h6 className="title text-truncate">Bicicleta Venzo </h6>
                            <dl className="dlist-inline small">
                              <dt>Talla: </dt>
                              <dd>L</dd>
                            </dl>
                            <dl className="dlist-inline small">
                              <dt>Color: </dt>
                              <dd>Orange color</dd>
                            </dl>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <input type="number" name="quantity" min="1" max="100" />

                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$2'000.000 cop</var><br/>
                          <small className="text-muted">($2'000.000 cop c/u)</small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success"
                          data-toggle="tooltip"> <i className="fa fa-heart"></i></a>
                        <a href="" className="btn btn-outline-danger" > × Remove</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="media">
                          <div className="img-wrap"><img src={camisa1}
                            className="img-thumbnail img-sm w-75" />
                          </div>
                          <figcaption className="media-body">
                            <h6 className="title text-truncate">Camisa ciclismo </h6>
                            <dl className="dlist-inline small">
                              <dt>Talla: </dt>
                              <dd>XXL</dd>
                            </dl>
                            <dl className="dlist-inline small">
                              <dt>Color: </dt>
                              <dd>Orange color</dd>
                            </dl>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <input type="number" name="quantity" min="1" max="100"  />
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$30.000 cop</var><br/>
                          <small className="text-muted">($30.000 cop c/u)</small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success"
                          data-toggle="tooltip" > <i className="fa fa-heart"></i></a>
                        <a href="" className="btn btn-outline-danger" > × Remove</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="media">
                          <div className="img-wrap"><img src={guantes}
                            className="img-thumbnail img-sm w-75" />
                          </div>
                          <figcaption className="media-body">
                            <h6 className="title text-truncate">Guantes ciclismo </h6>
                            <dl className="dlist-inline small">
                              <dt>Talla: </dt>
                              <dd>M</dd>
                            </dl>
                            <dl className="dlist-inline small">
                              <dt>Color: </dt>
                              <dd>Orange color</dd>
                            </dl>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <input type="number" name="quantity" min="1" max="100"  />
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">$30.000 cop</var><br/>
                          <small className="text-muted">($20.000 cop c/u)</small>
                        </div>
                      </td>
                      <td className="text-right">
                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success"
                          data-toggle="tooltip" > <i className="fa fa-heart"></i></a>
                        <a href="" className="btn btn-outline-danger"> × Remove</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </main>

            <aside className="col-sm-3 ">
              <p className="alert alert-success">Agregue $15.000 cop de artículos elegibles a su pedido para calificar para
              envío GRATIS. </p>
              <dl className="dlist-align">
                <dt>Precio Total: </dt>
                <dd className="text-right">$2'050.000 cop</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Descuento:</dt>
                <dd className="text-right">$50.000 cop</dd>
              </dl>
              <dl className="dlist-align h4">
                <dt>Total:</dt>
                <dd className="text-right"><strong>$2'000.000 cop</strong></dd>
              </dl>
              <hr />
              <figure className="itemside mb-3">
                <aside className="aside"><i className="fab fa-cc-visa" ></i></aside>
                <div className="text-wrap small text-muted">
                  Paga 84.78 AED (Ahorra 14.97 AED)
                  Mediante el uso de tarjetas ADCB
              </div>
              </figure>
              <figure className="itemside mb-3">
                <aside className="aside"> <i className="fab fa-cc-mastercard"></i> </aside>
                <div className="text-wrap small text-muted">
                  Paga con MasterCard y ahorra 40%.<br />
                  Lorem ipsum dolor
              </div>
              </figure>
              <button type="button" className="btn btn-outline-success btn-lg btn-block" >Comprar</button>

            </aside>

          </div>

        </div>

      </section>
    )
  }
}

export default Carrito










