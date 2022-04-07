import React from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Paths from "./routers";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="main_content">
        <Paths />
      </div>
      <Footer />
    </React.Fragment>
  );
}


export default App;
