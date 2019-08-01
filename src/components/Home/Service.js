import React from 'react';

// config

// components
import {
  // Card,
  CardDeck,
  NavLink,
  // CardBody,
  // CardText
} from 'reactstrap';

// images

// styles

class Service extends React.Component {
  render() {
    return (
      <div className="Service">
        <h1 className="txt2" data-aos="zoom-in">Projects View</h1>
        <CardDeck className="Service row-lg-12 row-md-12 row-sm-12">
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-right">
            
            <NavLink href="/"><h5>Meal Plan & Delivery</h5></NavLink>
              
              <img className="imgproject"  src={ require('../../images/rossetta.jpg') } width='250' alt='f' />
               
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in">
            
            <NavLink href="/"><h5>FIRS VAT return </h5></NavLink> 
              
              <img className="imgproject"  src={ require('../../images/firsvat.jpg') } width='250' alt='f' />
              
            
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in">
            
            <NavLink href="./"><h5>Movie Rental </h5></NavLink> 
              
              <img className="imgproject" src={ require('../../images/movierental.jpg') } width='250' alt='f' />
              
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-left">
            
            <NavLink href="/"> <h5>Tracking WebApp</h5> </NavLink> 
              
              <img className="imgproject"  src={ require('../../images/halotrak.jpg') } width='250'  alt='f' />
              
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default Service;
