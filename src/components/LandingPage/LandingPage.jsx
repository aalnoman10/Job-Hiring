import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import { useLoaderData } from 'react-router-dom';

const LandingPage = () => {
    const featureDataReceive = useLoaderData();
    console.log(featureDataReceive);
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
        </div>
    );
};

export default LandingPage;