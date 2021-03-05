import React from "react";
import { Button, Card } from "react-bootstrap";
import path from "path";
const AdCard = (props) => {
  return (
    <ul>
      <li>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            src={`http://localhost:3000/${props.petPhoto}`}
            variant="top"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <ul>
                <li>Pet Type={props.petType}</li>
                <li> Pet Breed={props.breed}</li>
                <li>pet Age={props.age}</li>
                <li>pet City={props.city}</li>
              </ul>
            </Card.Text>
            <Button variant="primary">MORE</Button>
          </Card.Body>
        </Card>
      </li>
    </ul>
  );
};
export default AdCard;
