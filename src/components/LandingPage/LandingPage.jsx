import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const LandingPage = () => {
    const featureDataReceives = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeatureJobs featureDataReceives={featureDataReceives}></FeatureJobs>
        </div>
    );
};

export default LandingPage;