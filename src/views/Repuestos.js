import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer';
import CabeceraRe from '../component/CabeceraRe';
import Repuestos from '../component/Repuestos';

function App() {
    return (
        <div>
            <Nav />
            <CabeceraRe />
            <Repuestos />
            <Repuestos />
            <Repuestos />
            <Footer />
        </div>
    )

}

export default App;
