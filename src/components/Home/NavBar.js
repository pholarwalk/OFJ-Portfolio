import React from 'react';


// import logo from "./images/logo.svg";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
// import Login from "../Auth/Login.js";

// images

// styles

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div id="home" className=" row-lg-12">
        <Navbar expand="md" id="home1" className="nav-container " >
          <NavbarBrand className="brandlogo" href="/">
          <img className="logo" data-aos="flip-left"  src={require("../../images/JOSEPH.png")} width="60" height='60' alt="ofj" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="#project">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://docs.google.com/document/d/1ekRts3kiNkOzMxbKK-idJi9VwsJbHUjs1uNeCQvORsQ/edit?usp=sharing">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
