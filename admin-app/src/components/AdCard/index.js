import React from "react";
import {
  Button,
  Card,
  CardColumns,
  CardDeck,
  CardGroup,
} from "react-bootstrap";
import path from "path";
const AdCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={`http://localhost:3000/${props.petPhoto}`} variant="top" />
      <Card.Body>
        <Card.Text
          style={{
            textAlign: "left",
            fontWeight: "initial",
            textTransform: "capitalize",
          }}
        >
          Type={props.petType}
          <br></br>
          Breed={props.breed}
          <br></br>
          Age={props.age}
          <br></br>
          City={props.city}
        </Card.Text>
        <Button variant="primary">MORE</Button>
      </Card.Body>
    </Card>
  );
};
export default AdCard;
