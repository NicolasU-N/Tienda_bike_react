import React from 'react';
import Nav from '../component/Nav'
import Slide from '../component/Slide';
import Footer from '../component/Footer';
import Noticias from '../component/Noticias';
import '../resources/css/main.css'
import '../resources/css/style.css'

function App() {
    return (
        <div>
            <Nav />
            <Slide />
            <Noticias />
            <Footer />
        </div>
    )

}

export default App;