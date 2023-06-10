import React, { useEffect, useState } from 'react';
import './App.css';
import jobs from './db/jobs.json';
​
export default function AppJudith() {
  const [unfilteredJobData, setunfilteredJobData] = useState(jobs.data);
  const [jobData, setJobData] = useState([]);
  const [jobsNumber, setJobsNumber] = useState('');
  const [jobType, setJobType] = useState('');
​
  const handleSadClick = () => {
    setJobsNumber(1);
  };
​
  const handleOkayClick = () => {
    setJobsNumber(2);
  };
​
  const handleHappyClick = () => {
    setJobsNumber(3);
  };
​
  const handleFrontEndClick = () => {
    setJobType('front');
  };
​
  const handleFullStackClick = () => {
    setJobType('full');
  };
​
  const handleBackEndClick = () => {
    setJobType('back');
  };
​
  const handleSearchClick = () => {
    const filteredJobs = unfilteredJobData.filter((job) => {
      const jobName = job.job_name.toLowerCase();
      const jobTypeLower = jobType.toLowerCase();
​
      const isSeniorityMatch =
        job.seniority &&
        (job.seniority.toLowerCase().includes('trainee') ||
          job.seniority.toLowerCase().includes('junior') ||
          job.seniority.toLowerCase().includes('intern') ||
          job.seniority.toLowerCase().includes('entry'));
​
      return (
        jobName.includes(jobTypeLower) &&
        job.remote === true &&
        isSeniorityMatch
      );
    });
​
    const limitedJobs = filteredJobs.slice(0, jobsNumber);
​
    const shuffledJobs = limitedJobs.sort(() => Math.random() - 0.5);
​
    setJobData(shuffledJobs);
  };
​
  return (
    <div>
      <div>
        <button onClick={handleSadClick}>😞</button>
        <button onClick={handleOkayClick}>😐</button>
        <button onClick={handleHappyClick}>😄</button>
      </div>
​
      <div>
        <button onClick={handleFrontEndClick}>Front End</button>
        <button onClick={handleFullStackClick}>Full Stack</button>
        <button onClick={handleBackEndClick}>Back End</button>
      </div>
​
      <button onClick={() => handleSearchClick()}>Search</button>
​
      <div>
        {jobData.map((job, index) => (
          <div key={index}>
            <h2>{job.job_name}</h2>
            <p>{job.post_url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}