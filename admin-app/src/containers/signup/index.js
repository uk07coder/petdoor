import { React, useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import { Jumbotron, Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/input";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { signup } from "../../actions/user.actions";
/**
* @author
* @function Signup

**/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userSignup = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (user.loading) {
    <p>loading...</p>;
  }

  return (
    <Layout>
      <Jumbotron className="inner">
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontFamily: "josefine",
          }}
        >
          Register
        </h2>
        <div className="inform">
          <Container>
            <Row style={{ marginTop: "50px" }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={userSignup}>
                  <Row>
                    <Col md={6}>
                      <Input
                        Label="First Name"
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        Label="Last Name"
                        placeholder="First Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Input
                    Label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    Label="Password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Button
                    className="btn  btn-lg btn-block"
                    variant="primary"
                    type="submit"
                  >
                    Register
                  </Button>
                  <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Jumbotron>
    </Layout>
  );
};

export default Signup;
