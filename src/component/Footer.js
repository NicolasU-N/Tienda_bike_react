import React, { Component } from 'react'

/*const styleslide = {
    'margin': '1rem'
}*/

class Footer extends Component {


    render() {
        return (
            <div className="position-static fixed-bottom">
                <footer className="bg-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="accordion w-100 d-lg-flex" id="accordion">
                                    <div className="col-lg-4 col-md-12">
                                        <a href="#one" data-toggle="collapse"
                                            className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none">Contacto</a>
                                        <div className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block">
                                            Contacto
                                        </div>
                                        <div className="collapse text-white d-lg-flex" id="one" data-parent="#accordion">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div><i href="#" className="fab fa-facebook-square"></i><a className="colorText"
                                                        href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX"> AlmacenFabioAcevedo</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div><i href="#" className="fab fa-instagram"></i><a className="colorText"
                                                        href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX"> AlmacenFabioAcevedo</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div><i href="#" className="fab fa-twitter-square"></i><a className="colorText"
                                                        href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX"> AlmacenFabioAcevedo</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div><i className="fas fa-envelope"></i><a className="colorText"
                                                        href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX"> AlmacenFabioAcevedo</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <a href="#two" data-toggle="collapse"
                                            className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none">Servicio & Legal</a>
                                        <div className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block">
                                            Servicios & Legal
                                        </div>
                                        <div className="collapse text-white d-lg-flex" id="two" data-parent="#accordion">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX">Terminos y
                                                    condiciones</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX">Garantias</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX">Politicas de
                                                    privacidad</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/AlmacenFabioAcevedo/?epa=SEARCH_BOX">Atencion al Cliente</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <a href="#three" data-toggle="collapse"
                                            className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none">Inscribete</a>
                                        <div className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block">
                                            Inscribete
                                        </div>
                                        <div className="collapse text-white d-lg-flex" id="three" data-parent="#accordion">
                                            <div><input type="text" placeholder="email" /><button type="button"
                                                className="btn btn-primary btn-sm ml-2 mb-1">
                                                Unirme</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
            </div>
            


                )
            }
        }
        
export default Footer