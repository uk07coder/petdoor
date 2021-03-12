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
      <Nav>
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
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/*<NavbarrBrand href="#LogIn">Login</Navbar.Brand>*/}
        <NavLink
          to="/signin"
          style={{
            color: "#fff",
          }}
          className="nav-link"
        >
          Signin
        </NavLink>

        <NavLink to="/signup" style={{ color: "#fff" }} className="nav-link">
          Signup
        </NavLink>
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
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
