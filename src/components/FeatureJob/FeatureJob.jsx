import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureJob.css'

const FeatureJob = ({ featureDataReceive }) => {
    const { id, companyLogo, companyName, jobTitle, work, location, salary } = featureDataReceive

    return (
        <div className='feature-item'>
            <div className='feature-img'>
                <img src={companyLogo} alt="" />
            </div>
            <h4 className='h4'>{jobTitle}</h4>
            <p className='p pb-0'>{companyName}</p>
            <p className='p pb-0'>
                {
                    work.map((w, ind) => <button key={ind} className='btn pri-btn'>{w}</button>)
                }
            </p>
            <p className='p pb-0'><img src="./src/assets/Icons/Frame-4.png" alt="" className="icon" />{location} <span className='gray'> <img src="./src/assets/Icons/Frame.png" alt="" className="icon" /> Salary : {salary} </span></p>
            <p className='p pb-0'><Link to={`/job-details/${id}`}><button className='btn'>View Details</button></Link></p>

        </div>
    );
};

export default FeatureJob;