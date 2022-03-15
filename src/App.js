import React from "react";
import Header from "./component/header/Header";
import Home from "./component/pages/home/Home";
import AboutUs from "./component/pages/about/AboutUs";
import News from "./component/pages/news/News";
import ContactUs from "./component/pages/contact/ContactUs";
import Feature from "./component/pages/feature/Feature";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <AboutUs/>
      <Feature/>
      <News/>
      <ContactUs/>
    </React.Fragment>
  );
}

export default App;
