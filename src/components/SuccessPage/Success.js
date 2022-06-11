import React from 'react';
import env from '../../images/env.svg';
import './Success.scss';

const Success = () => {
    return (
        <div className="success">
            <h1>Thanks For Submitting</h1>
            <h3>Check Your Inbox</h3>
            <img src={env} alt="email-inbox" className='env' />
        </div>
    )
}

export default Success