import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import "../styles/Result.css"; // Import the CSS file

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const { jobData } = location.state;

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  };

  const tasks = [
    "Research this company and see if your values are aligned.",
    "Send an application to this company.",
    "Tailor your resume to the job description and send an application to this company."
  ]

  return (
    <div className="d-flex text-center vh-100">
      <Container>
        {jobData.map(({ job_name, company_name, post_url }, index) => (
          <Card
            key={index}
            className={`job-card text-center mx-auto ${
              flippedCards[index] ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <Card.Body>
                  <Card.Title>You can do this!</Card.Title>
                  <Card.Text>Task: {tasks[index]}</Card.Text>
                </Card.Body>
              </div>
              <div className="card-back">
                <Card.Body>
                  <Card.Title>{job_name}</Card.Title>
                  <Card.Text>{company_name}</Card.Text>
                  <a href={post_url} target="_blank" rel="noopener noreferrer">
                    link
                  </a>
                </Card.Body>
              </div>
            </div>
          </Card>
        ))}

        <div className="mt-3 text-center">
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
}
