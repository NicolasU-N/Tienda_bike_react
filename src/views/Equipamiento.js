import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer';
import Equipamiento from '../component/Equipamiento';
import CabeceraEqui from '../component/CabeceraEqui';

function App() {
    return (
        <div>
            <Nav />
            <CabeceraEqui />
            <Equipamiento />
            <Equipamiento />
            <Equipamiento />
            <Footer />
        </div>
    )

}

export default App;
