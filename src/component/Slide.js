import React, { Component } from 'react'
import image1 from '../resources/img/slide/img4.jpg'
import image2 from '../resources/img/slide/img3.jpg'
import image3 from '../resources/img/slide/img2.jpg'
import image4 from '../resources/img/slide/img1.jpg'

const styleslide = {
    'margin': '1rem'
}

class Slide extends Component {


    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={styleslide}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000">
                        <img src={image1} className="d-block w-100" alt="imagen 4" />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={image2} className="d-block w-100" alt="imagen 3" />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={image3} className="d-block w-100" alt="imagen 2" />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={image4} className="d-block w-100" alt="imagen 1" />
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

        )
    }
}

export default Slide