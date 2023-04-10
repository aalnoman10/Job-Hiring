import React from 'react';
import './SingleJobCategory.css'
const SingleJobCategory = ({ jobCategoryData }) => {
    const { name, img, jobs } = jobCategoryData;

    return (
        <div className='singleJobCategory light-bg'>
            <div>
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p className='p'>{jobs} Jobs Available</p>
        </div>
    );
};

export default SingleJobCategory;