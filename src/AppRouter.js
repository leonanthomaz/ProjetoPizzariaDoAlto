import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';

const AppRouter = () => {

    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default AppRouter;