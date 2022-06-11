import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'aos/dist/aos.css';

const Accomplishments = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    }, []);
    const [vis, setVis] = useState(false);
    const counterSS = {
        fontSize: '2rem',
        color: '#f58a04'
    };
    const like = (<FontAwesomeIcon icon={['fas', 'heart']} size="5x" style={{ color: '#323031' }} />);
    const plate = (<FontAwesomeIcon icon={['fas', 'utensils']} size="5x" style={{ color: '#323031' }} />);
    const award = (<FontAwesomeIcon icon={['fas', 'award']} size="5x" style={{ color: '#323031' }} />);
    const customer = (<FontAwesomeIcon icon={['fas', 'users']} size="5x" style={{ color: '#323031' }} />);

    return (
        <div>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <section className='container-fluid home3'>
                        {isVisible ? setVis(true) : null}
                        <div className='home-ctn row'>
                            <div className='top col-12'>
                                <h1 className='top-h1'>Accomplishments</h1>
                                <h5 className='top-h5'>1# Top Restaurent</h5>
                            </div>
                            <div data-aos='fade-up' className='top-c col-md-3 col-6'>
                                {award}
                                {vis ? <CountUp end={7} duration={3} style={counterSS} /> : null}
                                <span>Best Restaurant</span>
                            </div>
                            <div data-aos='fade-up' className='top-c col-md-3 col-6'>
                                {plate}
                                {vis ? <CountUp end={10} duration={3} style={counterSS} /> : null}
                                <span>Top Menu</span>
                            </div>
                            <div data-aos='fade-up' className='top-c col-md-3 col-6'>
                                {customer}
                                {vis ? <CountUp end={118724} duration={3} style={counterSS} /> : null}
                                <span>Customers</span>
                            </div>
                            <div data-aos='fade-up' className='top-c col-md-3 col-6'>
                                {like}
                                {vis ? <CountUp end={40824} duration={3} style={counterSS} /> : null}
                                <span>Likes</span>
                            </div>
                        </div>
                    </section >
                )}
            </VisibilitySensor>
        </div>
    )
}

export default Accomplishments