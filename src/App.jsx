import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Result from './views/Result';
import jobs from './db/jobs.json';
import { useEffect, useState } from 'react';
// import AppJudith from '../AppJudithJudith';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/daily-challenge",
      element: <Result/>,
    },
  ]);

  // const [data, setData] = useState('initial data');

  return (<RouterProvider router={router}/>);
}
