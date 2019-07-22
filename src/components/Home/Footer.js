import React from 'react';
import Form from './Forms';
// config

// components
import {
  Nav,
  NavLink,
  CardDeck
} from 'reactstrap';

// images

// styles

class Footer extends React.Component {
  render() {
    return (
      <div className="footies row-lg-12 row-md-12 row-sm-12">
        <CardDeck id="contact" >
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Nav vertical >
              <img className="footer-logo" data-aos="flip-left" src={require("../../images/JOSEPH.png")} width="120"  alt="ofj" />
              <div className="icons">
                <a className="hov" href='/'><i className="fab fa-github"></i></a>
                <a className="hov" href='/'><i className="fab fa-twitter"></i></a>
                <a className="hov" href='/'><i className="fab fa-instagram" ></i></a>
              </div>
            </Nav>
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
            <Nav vertical >
              <h2 id='project'>Projects</h2> <NavLink href="/">Movie Rental </NavLink> <NavLink href="./">Food Planner </NavLink> <NavLink href="/">Tracking WebApp</NavLink> <NavLink href="/">Meal Plan & Delivery</NavLink>
            </Nav>
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
          
            <Form/>
          </div>
        </CardDeck>
        
         </div>

    );
  }
}

export default Footer;
