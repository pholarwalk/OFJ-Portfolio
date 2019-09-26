import React from "react";
import { Media, Button } from "reactstrap";

class Adlib extends React.Component {
  render() {
    return (
      <div className="adlib-container">
        <Media>
          <Media className="media-card" left href="#">
            <div data-aos="fade-right">
              <img
                className="img-experience"
                id="img1"
                src={require("../../images/folastraight.jpeg")}
                width="500"
                alt="f"
              />
            </div>
          </Media>
          <Media id="text" body>
            <div className="text-experience" data-aos="fade-left">
              <h2>About Me</h2>Im Oluwasegun Folarin Joseph a Front-End
              Developer, a teamplayer, Active listener that shows Genuine
              Commitment, pretty much flexible,100% Reliable and responsible,
              with great Communication skill also Collaborating with other
              colleagues, im guaranteed to be a self-starter and independent
              worker, where i work with little direction but produces impactful
              work with my tool set mentioned below. i possess a can-do mindset
              and Quick Learning Ability, with High-End User Focus. <br />I love
              hangouts, doing fun, also new things as well breaking new
              grounds, Below are some of my project that i have worked on.
            </div>
            <h2>
              <Button className="contactbtn" href="#contact">Contact Me</Button>
            </h2>
          </Media>
        </Media>
      </div>
    );
  }
}

export default Adlib;
