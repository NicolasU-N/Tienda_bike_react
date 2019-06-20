import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Bicicletas from '../component/Bicicletas'
import CabeceraBici from '../component/CabeceraBici';


function App (){
    return(
        <div>
            <Nav />
            <CabeceraBici />
            <Bicicletas />
            <Bicicletas />
            <Bicicletas />
            <Footer />
        </div>
    )

}

export default App;
