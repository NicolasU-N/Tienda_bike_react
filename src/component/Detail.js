import React, { Component } from 'react'
import imgCard from '../resources/img/Bicicletas/onTrail.jpg'
import Venzo from '../resources/img/Bicicletas/Venzo.jpg'
import '../resources/css/main.css'
import '../resources/css/style.css'

const width1 = {
  'width': '80%'
}
const width2 = {
  'width': '70px'
}
const margin1 = {
  'margin-right': '0.4rem'
}



class Detail extends Component {

  constructor(props) {
    super();
    this.state = {
      detail: props.detail
    }
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="row no-gutters">
            <aside className="col-sm-5 border-right m-auto">

              <div id="carouselExampleIndicators" className="carousel slide ml-2 mr-2" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={imgCard} alt="First slide"/>
    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Venzo} alt="Second slide"/>
    </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={imgCard} alt="Third slide"/>
    </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>


                    
            </aside>
                  <aside className="col-sm-7">
                    <article className="px-3 py-3">
                      <h3 className="title mb-2">Producto #1</h3>
                      <div className="mb-2">
                        <var className="price h3 text-warning">
                          <span className="currency">COP $</span><span className="num">30.000</span>
                        </var>
                        <span> c/u</span>
                      </div>
                      <dl>
                        <dt>Descripción</dt>
                        <dd>
                          <p> Producto de excelente calidad 100% efectivo para darte alta eficiencia en tu deporte favorito
                            puedes encontrarlo en muchos colores y diseños de tal manera que acá podrás adaptar tu deporte a tu estilo de vida
                    </p>
                        </dd>
                      </dl>
                      <dl className="row">
                        <dt className="col-sm-3">Modelo#</dt>
                        <dd className="col-sm-9">12345611</dd>

                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">Negro y verde </dd>

                        <dt className="col-sm-3">Envíos</dt>
                        <dd className="col-sm-9">Colombia</dd>
                      </dl>
                      <div className="rating-wrap">
                        <ul className="rating-stars">
                          <li style={width1} className="stars-active">
                            <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i>
                            <i className="fa fa-star"></i>
                          </li>                          
                        </ul>
                        <div className="label-rating">132 reviews</div>
                        <div className="label-rating">154 ordenes </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-5">
                          <dl className="dlist-inline">
                            <dt>Cantidad: </dt>
                            <dd>
                              <select className="form-control form-control-sm" style={width2}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                              </select>
                            </dd>
                          </dl>
                        </div>
                        <div className="col-sm-7">
                          <dl className="dlist-inline">
                            <dt>Medida: </dt>
                            <dd>
                              <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                  value="option2" />
                                <span className="form-check-label">SM</span>
                              </label>
                              <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                  value="option2" />
                                <span className="form-check-label">MD</span>
                              </label>
                              <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                  value="option2" />
                                <span className="form-check-label">XXL</span>
                              </label>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      
                      <a href="#" className="btn  btn-primary"style={margin1}> Comprar </a>
                      <a href="#" className="btn  btn-outline-primary" > <i className="fas fa-shopping-cart"></i> Añadir al carrito</a>
                    </article>
                  </aside>
                </div>
              </div>        
        </div>
            )
        }
    }
    
    export default Detail
