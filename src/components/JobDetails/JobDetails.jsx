import React from 'react';
import JobDetailsBanner from '../JobDetailsBanner/JobDetailsBanner';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const JobDetailsId = useLoaderData();

    return (
        <div>
            <JobDetailsBanner></JobDetailsBanner>
            <SingleJobDetails JobDetailsId={JobDetailsId}></SingleJobDetails>
        </div>
    );
};

export default JobDetails;