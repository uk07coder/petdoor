import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
      <Link to="/" className="navbar-brand">
        Petstreet
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {/*<Navbar.Brand href="#LogIn">Login</Navbar.Brand>*/}
          <li className="nav-item" style={{ listStyle: "none" }}>
            <NavLink
              to="/signin"
              style={{
                color: "#fff",
              }}
              className="nav-link"
            >
              Signin
            </NavLink>
          </li>
          <li
            className="nav-item"
            style={{ listStyle: "none", float: "right " }}
          >
            <NavLink
              to="/signup"
              style={{ color: "#fff" }}
              className="nav-link"
            >
              Signup
            </NavLink>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
