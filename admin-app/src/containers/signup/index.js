import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import { Jumbotron, Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/input";
import { useSelector } from "react-redux";
import "./index.css";
/**
* @author
* @function Signup

**/

const Signup = (props) => {
  const auth = useSelector((state) => state.auth);
  if (auth.authenticate) {
    return <Redirect to={"/"} />;
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
                <Form>
                  <Row>
                    <Col md={6}>
                      <Input
                        Label="First Name"
                        placeholder="First Name"
                        type="text"
                        value=""
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        Label="Last Name"
                        placeholder="First Name"
                        type="text"
                        value=""
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Input
                    Label="Email"
                    placeholder="Email"
                    type="email"
                    value=""
                    onChange={() => {}}
                  />
                  <Input
                    Label="Password"
                    placeholder="Password"
                    type="password"
                    value=""
                    onChange={() => {}}
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
