import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Layout from "../../components/Layout/";
import Input from "../../components/UI/input";
import { Helmet } from "react-helmet";

/**
* @author
* @function Adpost

**/

const Adpost = (props) => {
  return (
    <Layout>
      &nbsp;
      <Helmet>
        <style>{"body { background-color: red; }"}</style>
      </Helmet>
      <Container style={{ backgroundColor: "darkgrey" }}>
        <h1 style={{ textAlign: "center", color: "black" }}>
          Post Pet For Adoption
        </h1>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    Label="Pet Type"
                    placeholder="Pet Type"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    Label="Breed"
                    placeholder="Breed"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                Label="Age"
                placeholder="Age"
                type="text"
                value=""
                onChange={() => {}}
              />
              <Input
                Label="City"
                placeholder="City"
                type="text"
                value=""
                onChange={() => {}}
              />
              <Form.Group>
                <Form.File id="petphoto" label="Pet Photo" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Post
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Adpost;
