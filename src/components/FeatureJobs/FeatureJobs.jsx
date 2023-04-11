import React from 'react';
import FeatureJob from '../FeatureJob/FeatureJob';
import './FeatureJobs.css';

const FeatureJobs = ({ featureDataReceives }) => {

    return (
        <div className='container'>
            <h3 className='h3 text-center'>Featured  Jobs</h3>
            <p className='p text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='feature-container'>
                {
                    featureDataReceives.slice(0, 4).map(featureDataReceive => <FeatureJob
                        key={featureDataReceive.id}
                        featureDataReceive={featureDataReceive}
                    ></FeatureJob>)
                }
            </div>
            <div className='text-center see-all-div'>
                <button className='btn'>See All</button>
            </div>
        </div>
    );
};

export default FeatureJobs;