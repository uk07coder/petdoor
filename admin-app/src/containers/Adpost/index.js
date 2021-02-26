import { React, useState } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Layout from "../../components/Layout/";
import Input from "../../components/UI/input";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { adposting } from "../../actions/ad.action";
/**
* @author
* @function Adpost

**/

const Adpost = (props) => {
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [petPhoto, setPetPhoto] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const adc = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const adPost = (e) => {
    e.preventDefault();
    const adcon = new FormData();
    adcon.append("petType", petType);
    adcon.append("breed", breed);
    adcon.append("age", age);
    adcon.append("city", city);
    adcon.append("petPhoto", petPhoto);

    dispatch(adposting(adcon));
  };

  if (adc.loading) {
    <p>loading...</p>;
  }

  return (
    <Layout>
      &nbsp;
      <Container style={{ backgroundColor: "white", fontSize: "large" }}>
        <h1 style={{ textAlign: "center", color: "black" }}>
          Post Pet For Adoption
        </h1>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={adPost}>
              <Row>
                <Col md={6}>
                  <Input
                    Label="Pet Type"
                    placeholder="Pet Type"
                    type="text"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    Label="Breed"
                    placeholder="Breed"
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                Label="Age"
                placeholder="Age"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                Label="City"
                placeholder="City"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Form.Group>
                <Form.File
                  id="petphoto"
                  label="Pet Photo"
                  type="file"
                  onChange={(e) => setPetPhoto(e.target.files[0])}
                />
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
