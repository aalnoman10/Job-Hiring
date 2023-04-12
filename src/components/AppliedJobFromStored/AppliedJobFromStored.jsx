import React from 'react';
import { Link } from 'react-router-dom';
import './AppliedJobFromStored.css'

const AppliedJobFromStored = ({ storedCart }) => {
    const { id, companyLogo, jobTitle, companyName, work, location, salary } = storedCart;

    return (
        <div className='applied-job flex'>
            <div className='light-bg fist-child flex'>
                <div className='applied-job-img'>
                    <img src={companyLogo} alt="" />
                </div>
            </div>
            <div className="applied-job-info">
                <h4 className="h4">{jobTitle}</h4>
                <p className="p pb-0">{companyName}</p>
                <p className='p pb-0'>
                    {
                        work.map((w, ind) => <button key={ind} className='btn pri-btn'>{w}</button>)
                    }
                </p>
                <p className='p pb-0'><img src="/src/assets/Icons/Frame-4.png" alt="" className="icon" />{location} <span className='gray'> <img src="/src/assets/Icons/Frame.png" alt="" className="icon" /> Salary : {salary} </span></p>
            </div>
            <div>
                <p className='p'><Link to={`/job-details/${id}`}><button className='btn'>View Details</button></Link></p>
            </div>
        </div >
    );
};

export default AppliedJobFromStored;