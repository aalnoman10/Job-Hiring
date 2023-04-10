import React, { useEffect, useState } from 'react';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';
import './JobCategoryList.css'
const JobCategoryList = () => {

    const [jobCategoryDatas, setJobCategoryDatas] = useState([]);

    useEffect(() => {
        fetch('pake/jobAble.json')
            .then(res => res.json())
            .then(data => setJobCategoryDatas(data))
    }, [])

    console.log(jobCategoryDatas);
    return (
        <div className='container'>
            <h3 className='text-center h3'>Job Category List</h3>
            <p className='p text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="job-category-container flex">
                {
                    jobCategoryDatas.map(jobCategoryData => <SingleJobCategory
                        key={jobCategoryData.id}
                        jobCategoryData={jobCategoryData}
                    ></SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;