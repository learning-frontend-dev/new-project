import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './component/pages/home/Home';
import ContactUs from './component/pages/contact/ContactUs';
import AboutUs from './component/pages/about/AboutUs';
import News from './component/pages/news/News';
import Feature from './component/pages/feature/Feature';
import Register from './component/pages/authModule/Register';

const Paths = () => {
    return (

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/feature" element={<Feature />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    )
}

export default Paths;