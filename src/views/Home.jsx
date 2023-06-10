import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"; // Import the CSS file

export default function Home() {
  const [userMood, setUserMood] = useState("");
  const [userTechStack, setUserTechStack] = useState("full");

  // Declare navigate for view redirection
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    // e.preventDefault();

    const userCriteria = {
      userMood,
      userTechStack,
    };

    navigate('/daily-challenge')

    console.log(userCriteria);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <header className="text-center mt-3">
          <h1 className="fw-bold">Welcome to APP_TITLE</h1>
        </header>

        <Container className="mood-container-form rounded-3 w-75 py-3 mt-5 bg-white">
          <Form onSubmit={onFormSubmit}>
            <div className="py-4 mx-5">
              <Form.Group controlId="mood" className="mb-4">
                <Form.Label>How are you feeling today?</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Sad"
                    name="mood"
                    value="sad"
                    onChange={(e) => setUserMood(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Neutral"
                    name="mood"
                    value="neutral"
                    onChange={(e) => setUserMood(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Happy"
                    name="mood"
                    value="happy"
                    onChange={(e) => setUserMood(e.target.value)}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="techStack" className="mb-4">
                <Form.Label>
                  What type of tech stack are you looking for?
                </Form.Label>
                <Form.Control
                  as="select"
                  value={userTechStack} // Set the value to the state variable
                  onChange={(e) => setUserTechStack(e.target.value)} // Update the state variable on change
                >
                  <option value="full">Full Stack</option>
                  <option value="back">Back End</option>
                  <option value="front">Front End</option>
                </Form.Control>
              </Form.Group>

              <div className="text-center mb-4">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}
