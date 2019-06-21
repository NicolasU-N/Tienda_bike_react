import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer';
import Registrar from '../component/Registrar';

function App() {
    return (
        <div>
            <Nav />
            <Registrar />
            <Footer />
        </div>
    )

}

export default App;
