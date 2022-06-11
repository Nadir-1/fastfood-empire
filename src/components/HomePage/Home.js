import React from 'react';
import Header from './Header';
import Best from './Best';
import Review from './Review';
import Accomplishments from './Accomplishments.js';
import './HomePage.scss';
const Home = (props) => {
    return (
        <div>
            <Header />
            <Best add={props.add} />
            <Accomplishments />
            <Review />
        </div >
    )
}

export default Home
