import React from "react";
import { Button, Card } from "react-bootstrap";

const AdCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src="" variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Pet Type={props.petType}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default AdCard;
