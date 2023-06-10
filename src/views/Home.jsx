import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import the CSS file
import jobs from "../db/jobs.json";
import Result from "./Result";

export default function Home() {
  const [userMood, setUserMood] = useState("");
  const [userTechStack, setUserTechStack] = useState("full");
  // Declare navigate for view redirection
  const navigate = useNavigate();

  //Judith
  const unfilteredJobData = jobs.data;

  const handleSearchClick = () => {
    const filteredJobs = unfilteredJobData.filter((job) => {
      const jobName = job.job_name.toLowerCase();
      const jobTypeLower = userTechStack.toLowerCase();
      const isSeniorityMatch =
        job.seniority &&
        (job.seniority.toLowerCase().includes("trainee") ||
          job.seniority.toLowerCase().includes("junior") ||
          job.seniority.toLowerCase().includes("intern") ||
          job.seniority.toLowerCase().includes("entry"));

      return (
        jobName.includes(jobTypeLower) &&
        job.remote === true &&
        isSeniorityMatch
      );
    });

    const limitedJobs = filteredJobs.slice(0, userMood);

    const shuffledJobs = limitedJobs.sort(() => Math.random() - 0.5);


    //navigate test
    console.log('jobData at Home', shuffledJobs)
    navigate("/daily-challenge", { state: { jobData: shuffledJobs, userMood } });

  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const userCriteria = {
      userMood,
      userTechStack,
    };

    handleSearchClick();
  };

  const getEmoji = (mood) => {
    switch (mood) {
      case "sad":
        return "😞";
      case "neutral":
        return "😐";
      case "happy":
        return "😊";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <header className="text-center mt-3">
          <h1 className="fw-bold">
            Welcome, let's <br /> Choose Your Hunt!
          </h1>
        </header>

        <Container className="mood-container-form rounded-3 w-75 py-3 mt-5 bg-white">
          <Form onSubmit={onFormSubmit}>
            <div className="py-4 mx-5">
              <Form.Group controlId="mood" className="mb-4">
                <Form.Label>How are you feeling today?</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label={<>{getEmoji("sad")} Sad</>}
                    name="mood"
                    value="1"
                    onChange={(e) => setUserMood(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label={<>{getEmoji("neutral")} Neutral</>}
                    name="mood"
                    value="2"
                    onChange={(e) => setUserMood(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label={<>{getEmoji("happy")} Happy</>}
                    name="mood"
                    value="3"
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
                  value={userTechStack}
                  onChange={(e) => setUserTechStack(e.target.value)}
                >
                  <option value="full">Full Stack</option>
                  <option value="back">Back End</option>
                  <option value="front">Front End</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group controlId="apiKey" className="mb-4">
                <Form.Label>API Key</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </Form.Group> */}

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
