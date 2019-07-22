import React from 'react';

// config

// components
import NavBar from "./Home/NavBar";
import Adlib from "./Home/Adlib";
import Feature from "./Home/Feature";
import Service from "./Home/Service";
import Footer from "./Home/Footer";

// images

// styles
import '../styles/App.css';


class App extends React.Component {
  render() {
    return (
      <div className="general-container">
        <NavBar />
        <Adlib />
        <Feature />
        <Service />
        
        <Footer />
      </div>

    );
  }
}

export default App;
