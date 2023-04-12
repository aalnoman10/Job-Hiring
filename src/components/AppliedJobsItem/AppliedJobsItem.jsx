import React, { useState } from 'react';
import './AppliedJobsItem.css'
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobFromStored from '../AppliedJobFromStored/AppliedJobFromStored';

const AppliedJobsItem = ({ appliedJobsDatas }) => {

    const getItemFromLocalStorage = getShoppingCart();

    let storedCarts = [];
    for (const id in getItemFromLocalStorage) {
        const newStoredCart = appliedJobsDatas.find(appliedJobsData => appliedJobsData.id == id);
        storedCarts.push(newStoredCart)
    }

    return (
        <div className='container'>
            <div className='btn-filter-div'>
                <button className='btn-filter'>Filter By</button>
            </div>
            <div className="applied-jobs-container">
                {
                    storedCarts.map(storedCart => <AppliedJobFromStored
                        key={storedCart.id}
                        storedCart={storedCart}
                    ></AppliedJobFromStored>)
                }
            </div>
        </div>
    );
};

export default AppliedJobsItem;