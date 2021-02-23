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
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/auth.action";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  const renderLoggedInLinks = () => {
    return (
      <Nav className="ml-auto">
        <li className="nav-item" style={{ listStyle: "none" }}>
          <NavLink
            to="/signin"
            onClick={logout}
            style={{
              color: "#fff",
            }}
            className="nav-link"
          >
            Signout
          </NavLink>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav className="ml-auto" style={{}}>
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
        <li className="nav-item" style={{ listStyle: "none", float: "right " }}>
          <NavLink to="/signup" style={{ color: "#fff" }} className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
      <Link to="/" className="navbar-brand">
        Petstreet
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
