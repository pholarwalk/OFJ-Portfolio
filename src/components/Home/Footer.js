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
              <img className="footer-logo" data-aos="flip-left" src={require("../../images/JOSEPH.png")} width="80"  alt="ofj" />
              <div className="icons">
                <a className="hov" href='https://github.com/pholarwalk/'><i className="fab fa-github"></i></a>
                <a className="hov" href='https://twitter.com/OTUNBA_folarin/'><i className="fab fa-twitter"></i></a>
                <a className="hov" href='https://www.instagram.com/pholarwalk/'><i className="fab fa-instagram" ></i></a>
              </div>
            </Nav>
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
            <Nav vertical >
              <h4 id='project'>Projects</h4> <NavLink href="/">Movie Rental </NavLink> <NavLink href="./">FIRS VAT Return </NavLink> <NavLink href="/">Tracking WebApp</NavLink> <NavLink href="/">Meal Plan & Delivery</NavLink>
            </Nav>
          </div>
          <div className="txt col-lg-4 col-md-4 col-sm-4">
          
            <Form/>
          </div>
          <div className="footer-text col-lg-12 col-md-12 col-sm-12">
          <p>© 2019 O F J, All Rights Reserved.</p>
          </div>
        </CardDeck>
        
         </div>

    );
  }
}

export default Footer;
