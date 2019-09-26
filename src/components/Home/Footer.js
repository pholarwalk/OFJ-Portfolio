import React from 'react';
// config

// components
import {
  // Button,
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
            
              <img className="footer-logo" data-aos="flip-left" src={require("../../images/JOSEPH.png")} width="80"  alt="ofj" />
              
            
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-4">
            
            <div className="icons">
                <a className="hov2" href='https://github.com/pholarwalk/'><i className="fab fa-github"></i></a>
                <a className="hov2" href='https://twitter.com/OTUNBA_folarin/'><i className="fab fa-twitter"></i></a>
                <a className="hov2" href='https://www.instagram.com/pholarwalk/'><i className="fab fa-instagram" ></i></a>
              </div>
            
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <br/><h5><i className="button-hire fas fa-phone"></i>+2347035197485</h5><br/>
          <i className="button-hire far fa-envelope"></i><a  href="mailto:oluwasegunfolarinjoseph@gmail.com" className="button-hire" >oluwasegunfolarinjoseph@gmail.com</a>
          </div>
          <div className="footer-text col-lg-12 col-md-12 col-sm-12">
          <h5>© 2019 O F J, All Rights Reserved.</h5>
          </div>
        </CardDeck>
        
         </div>

    );
  }
}

export default Footer;
