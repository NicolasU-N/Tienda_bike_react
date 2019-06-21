import React from 'react';
import '../resources/css/main.css'
import '../resources/css/style.css'
import Nav from '../component/Nav'
import Footer from '../component/Footer';
import Login from '../component/Registrar';

function App() {
    return (
        <div>
            <Nav />
            <Login />
            <Footer />
        </div>
    )

}

export default App;
