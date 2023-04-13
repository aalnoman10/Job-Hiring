import React, { useEffect, useState } from 'react';
import './SingleJobDetais.css'
import { addToDb } from '../../utilities/fakedb';
const SingleJobDetails = ({ JobDetailsId }) => {

    const [singleJobDetailsDatas, setSingleJobDetailsDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/public/pake/featureJobs.json');
            const json = await data.json();
            setSingleJobDetailsDatas(json);
        }
        fetchData();
    }, [])

    let remaining
    if (singleJobDetailsDatas.length) {
        remaining = singleJobDetailsDatas.find(singleJobDetailsData => JobDetailsId == singleJobDetailsData.id)
    }

    return (
        <div className='container job-info'>
            <div>
                <p className="p"><strong>Job Description : </strong> {remaining ? remaining.jobDescription : ""}</p>
                <p className="p"><strong>Job Responsibility : </strong> {remaining ? remaining.jobResponsibility : ''}</p>
                <p className="p"><strong>Educational Requirements : </strong> </p>
                <p className="p">{remaining ? remaining.educationRequirements : ''}</p>
                <p className="p"><strong>Experiences : </strong> </p>
                <p className="p">{remaining ? remaining.experiences : ''}</p>
            </div>
            <div className='job-sum'>
                <div className='light-bg p-1'>
                    <h3>Job Details</h3>
                    <br />
                    <p className="p"><img className='icon' src="./src/assets/Icons/Frame-4.png" alt="" /> <strong>Salary :</strong>{remaining ? remaining.salary : ''}</p>
                    <p className="p"><img className='icon' src="./src/assets/Icons/Frame-1.png" alt="" /><strong> Job Title :</strong> {remaining ? remaining.jobTitle : ''}</p>
                    <br />
                    <h3> Contact Information</h3>
                    <p className="p"><img className='icon' src="./src/assets/Icons/Frame-2.png" alt="" /><strong> Phone : </strong>{remaining ? remaining.contactInfo.phone : ''}</p>
                    <p className="p"><img className='icon' src="./src/assets/Icons/Frame-3.png" alt="" /><strong> Email : </strong>{remaining ? remaining.contactInfo.email : ''}</p>
                    <p className="p"><img className='icon' src="./src/assets/Icons/Location-Icon.png" alt="" /><strong> Address : </strong>{remaining ? remaining.location : ''}</p>
                </div>
                <button onClick={() => addToDb(remaining ? remaining.id : '')} className="btn w-100 ">Apply Now</button>
            </div>
        </div>
    );
};

export default SingleJobDetails;