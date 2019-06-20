import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Carrito from '../component/Carrito';


function App(){
    return(
        <div>
            <Nav />
            <Carrito />
            <Footer />
        </div>
    )

}

export default App;
