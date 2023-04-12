import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import StarApplying from './components/StarApplying/StarApplying';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <LandingPage></LandingPage>,
        loader: () => fetch('/pake/featureJobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied-Jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/pake/featureJobs.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/star-applying',
        element: <StarApplying></StarApplying>
      },
      {
        path: '/job-details',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/job-details/:detailsId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => params.detailsId
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
