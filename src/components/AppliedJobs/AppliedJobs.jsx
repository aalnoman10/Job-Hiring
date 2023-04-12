import React from 'react';
import AppliedJobsBanner from '../AppliedJobsBanner/AppliedJobsBanner';
import AppliedJobsItem from '../AppliedJobsItem/AppliedJobsItem';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedJobsDatas = useLoaderData();

    return (
        <div>
            <AppliedJobsBanner></AppliedJobsBanner>
            <AppliedJobsItem appliedJobsDatas={appliedJobsDatas}></AppliedJobsItem>
        </div>
    );
};

export default AppliedJobs;