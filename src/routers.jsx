import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router-dom';
import Home from './component/pages/home/Home';
import ContactUs from './component/pages/contact/ContactUs';
import AboutUs from './component/pages/about/AboutUs';
import News from './component/pages/news/News';
import Feature from './component/pages/feature/Feature';

const Routers = () =>{
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact-us" component={ContactUs}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/feature" component={Feature}/>
            <Route exact path="/about-us" component={AboutUs}/>
        </Router>
}

export default Routers;

ReactDOM.render(Routers, document.getElementById("root"));