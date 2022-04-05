import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Home from './component/pages/home/Home';
import ContactUs from './component/pages/contact/ContactUs';
import AboutUs from './component/pages/about/AboutUs';
import News from './component/pages/news/News';
import Feature from './component/pages/feature/Feature';

const Paths = () => {
    return (

        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/feature" element={<Feature />} />
            <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
    )
}

export default Paths;