import React, { useEffect, useState } from 'react';
import './SingleJobDetais.css'
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

    let remaning
    if (singleJobDetailsDatas.length) {
        remaning = singleJobDetailsDatas.find(singleJobDetailsData => JobDetailsId == singleJobDetailsData.id)
    }

    console.log(remaning ? remaning : remaning);

    return (
        <div className='container job-info'>
            <div>
                <p className="p"><strong>Job Description : </strong> {remaning ? remaning.jobDescription : ""}</p>
                <p className="p"><strong>Job Responsibility : </strong> {remaning ? remaning.jobResponsibility : ''}</p>
                <p className="p"><strong>Educational Requirements : </strong> </p>
                <p className="p">{remaning ? remaning.educationRequirements : ''}</p>
                <p className="p"><strong>Experiences : </strong> </p>
                <p className="p">{remaning ? remaning.experiences : ''}</p>
            </div>
            <div className='job-sum'>
                <div className='light-bg p-1'>
                    <h3>Job Details</h3>
                    <br />
                    <p><img className='icon' src="/src/assets/Icons/Frame-4.png" alt="" /> <strong>Salary :</strong>{remaning ? remaning.salary : ''}</p>
                    <p className="p"><img className='icon' src="/src/assets/Icons/Frame-1.png" alt="" /><strong> Job Title :</strong> {remaning ? remaning.jobTitle : ''}</p>
                    <br />
                    <h3> Contact Information</h3>
                    <p className="p"><img className='icon' src="/src/assets/Icons/Frame-2.png" alt="" /><strong> Phone : </strong>{remaning ? remaning.contactInfo.phone : ''}</p>
                    <p className="p"><img className='icon' src="/src/assets/Icons/Frame-3.png" alt="" /><strong> Email : </strong>{remaning ? remaning.contactInfo.email : ''}</p>
                    <p className="p"><img className='icon' src="/src/assets/Icons/Location-Icon.png" alt="" /><strong> Address : </strong>{remaning ? remaning.location : ''}</p>
                </div>
                <button className="btn w-100 ">Apply Now</button>
            </div>
        </div>
    );
};

export default SingleJobDetails;