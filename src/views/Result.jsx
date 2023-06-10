import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Result() {
  // Declare navigate for view redirection
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-start vh-100 mt-5">
      <Card className="m-4">
        <Card.Body>
          <Card.Title>Result/Encouragement</Card.Title>
          <Card.Text>
            This is the content of the result/encouragement card.
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={() => navigate("/")} className="mt-3">
        Go Back
      </Button>
    </div>
  );
}
