import React from 'react';
import P3OLGJ1 from '../../assets/All Images/P3OLGJ1-copy-1.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container flex light-bg pb-0'>
            <article>
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p className='p'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn'>Get Started</button>
            </article>
            <aside>
                <img src={P3OLGJ1} alt="" />
            </aside>
        </div>
    );
};

export default Banner;