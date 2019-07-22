import React from 'react';

// config

// components
import {
  Card,
  CardDeck,
  NavLink,
  CardBody,
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
            <Card>
            <NavLink href="/"><h5>Meal Plan & Delivery</h5></NavLink>
              <CardBody>
              <img className="imgproject"  src={ require('../../images/rossetta.jpg') } width='250' alt='f' />
                </CardBody>
            </Card>
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in">
            <Card >
            <NavLink href="/"><h5>Food Planner </h5></NavLink> 
              <CardBody>
              <img className="imgproject"  src={ require('../../images/foodplanner.jpg') } width='250' alt='f' />
              </CardBody>
            </Card>
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in">
            <Card >
            <NavLink href="./"><h5>Movie Rental </h5></NavLink> 
              <CardBody>
              <img className="imgproject" src={ require('../../images/movierental.jpg') } width='250' alt='f' />
              </CardBody>
            </Card>
          </div>
          <div className=" wholediv col-lg-3 col-md-3 col-sm-3 " data-aos="zoom-in-left">
            <Card >
            <NavLink href="/"> <h5>Tracking WebApp</h5> </NavLink> 
              <CardBody>
              <img className="imgproject"  src={ require('../../images/rossetta.jpg') } width='250'  alt='f' />
              </CardBody>
            </Card>
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default Service;
