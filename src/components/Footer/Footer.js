import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Footer.scss';

const Footer = () => {
    const icon = {
        color: '#f58a04',
        padding: '2px'
    }
    const twitter = (<FontAwesomeIcon icon={['fab', 'twitter']} style={icon} size="2x" />);
    const youtube = (<FontAwesomeIcon icon={['fab', 'youtube']} style={icon} size="2x" />);
    const faInstagram = (<FontAwesomeIcon icon={['fab', 'instagram']} style={icon} size="2x" />);
    const facebook = (<FontAwesomeIcon icon={['fab', 'facebook-f']} style={icon} size="2x" />);
    const link = (<FontAwesomeIcon icon={['fas', 'link']} style={icon} />);
    const phone = (<FontAwesomeIcon icon={['fas', 'phone']} style={icon} />);
    const email = (<FontAwesomeIcon icon={['fas', 'envelope']} style={icon} />);
    const loc = (<FontAwesomeIcon icon={['fas', 'location-dot']} style={icon} />);
    const copyright = (<FontAwesomeIcon icon={['far', 'copyright']} />);
    return (
        <div className="footer container-fluid">
            <div className="row">
                <div className='col-lg-3 col-md-6 col-sm-6 col-12 secF '>
                    <h5 className="f-title"><img src={logo} className="logoP2" alt='logo' /> Fast-Food Empire</h5>
                    <p>This is the best restaurant in the City and I hope you enjoy eating our food. Bon Appétit :) </p>
                    <div className='brands'>
                        {facebook}{twitter}{faInstagram}{youtube}
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12 secF'>
                    <h5 className="f-title">Contact Info</h5>
                    <p>{phone} 0000000000</p>
                    <p>{email} example@example.example</p>
                    <p>{loc} City,street 0000</p>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12 secF'>
                    <h5 className="f-title">Links</h5>
                    <p>{link} Home</p>
                    <p>{link} Menu</p>
                    <p>{link} Contact</p>
                    <p>{link} Best Offers</p>
                    <p>{link} Review</p>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12 secF'>
                    <h5 className="f-title">Newsletter</h5>
                    <p>Subscribe for latest updates</p>
                    <input className='inp0' type="email" placeholder='example@example.example' />
                    <br />
                    <Button className='sub-btn' size='sm' >Subscribe</Button>
                </div>
                <hr />
                <div className='col-12'>
                    <h5 className='f-title2'><img src={logo} className="logoP2" alt='logo' /> Copyright {copyright} 2022 Fast-Food Empire</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer