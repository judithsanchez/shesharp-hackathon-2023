import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import "../styles/Result.css"; // Import the CSS file

export default function Result({mood="sad"}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const { jobData } = location.state;

  let task = '';

  console.log("jobData in Result", jobData);

  const handleCardClick = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  if(mood === "sad"){
    task = "Research this company and see if your values are aligned.";
  } else if (mood === "neutral") {
    task = "Send an application to this company";
  } else {
    task = "Tailor your resume to the job description and send an application to this company";
  }

  return (
    <div className="d-flex text-center vh-100">
      <Container> 
        <Card
          className={`job-card text-center mx-auto ${isCardFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
        >
          <div className="card-inner">
            <div className="card-front">
              <Card.Body>
                <Card.Title>You can do this!</Card.Title>
                <Card.Text>Task: {task}</Card.Text>
              </Card.Body>
            </div>
            <div className="card-back">
              <Card.Body>
                <Card.Title>{jobData[0].job_name}</Card.Title>
                <Card.Text>{jobData[0].company_name}</Card.Text>
                <a href={jobData[0].post_url} target="_blank" >link</a>
              </Card.Body>
            </div>
          </div>
        </Card>
        
        <div className="mt-3 text-center">
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
}
