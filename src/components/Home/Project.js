import React from "react";

// config

// components
import {
  // Card,
  CardDeck,
  NavLink
  // CardBody,
  // CardText
} from "reactstrap";

// images

// styles

class Project extends React.Component {
  render() {
    return (
      <div id="project" className="Service">
        <h1 className="txt2" data-aos="zoom-in">
          Projects
        </h1>
        <CardDeck className="Service row-lg-12 row-md-12 row-sm-12">
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in-right"
          >
            <NavLink href="https://ogunsolahabib.github.io/rosetta/">
              <h5>Meal Plan & Delivery</h5>

              <img
                className="imgproject"
                src={require("../../images/rossetta.jpg")}
                width="250"
                alt="f"
              />
              <p>
                This is a meal planner app , used to order meals for 30days ,
                leaving the customer not to worry about food for 30 days
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in"
          >
            <NavLink href="http://firs.netlify.com">
              <h5>FIRS VAT return </h5>

              <img
                className="imgproject"
                src={require("../../images/firsvat.jpg")}
                width="250"
                alt="f"
              />
              <p>
                This is a FIRS VAT Return calculator for Nigeria , where tax
                payer calculate his tax return, hereby eradicating paperwork.
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in"
          >
            <NavLink href="http://simovierentals.netlify.com">
              <h5>Movie Rental </h5>

              <img
                className="imgproject"
                src={require("../../images/movierental.jpg")}
                width="250"
                alt="f"
              />
              <p>
                This is a movie rental app , where subscribers can rent movies ,
                leaving the subscriber not to worry about getting cd plates.
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in-left"
          >
            <NavLink href="https://halotrak.netlify.com ">
              {" "}
              <h5>Tracking WebApp</h5>
              <img
                className="imgproject"
                src={require("../../images/halotrak.jpg")}
                width="250"
                alt="f"
              />
              <p>
                This is a location based tracking webapp landing page, for
                tracking vehicle and mobile devices in real time.
              </p>
            </NavLink>
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default Project;
