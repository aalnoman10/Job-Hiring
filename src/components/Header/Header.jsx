import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='flex light-bg nav container'>
            <div>
                <Link className='logo a' to='/'>JobHiring</Link>
            </div>
            <div className='nav-links'>
                <Link className='a' to='/statistics'>Statistics</Link>
                <Link className='a' to='/applied-Jobs'>Applied Jobs</Link>
                <Link className='a' to='/blog'>Blog</Link>
            </div>
            <div>
                <Link to='/star-applying'><button className='btn'>Star Applying</button></Link>
            </div>
        </nav>
    );
};

export default Header;