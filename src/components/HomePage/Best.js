import React, { useEffect } from 'react';
import PlateCard from '../PlateCard/PlateCard';
import Aos from 'aos';
import plate from '../../db/db';
import 'aos/dist/aos.css';

const Best = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    }, [])
    return (
        <div className='container-fluid home2'>
            <div className='home-ctn row'>
                <div className='best col-12'>
                    <h1>Our Best Offers</h1>
                </div>
                <div className='best col-md-4 col-12' data-aos='fade-up'>
                    <PlateCard add={props.add} plate={plate[8]} />
                </div>
                <div className='best col-md-4 col-12' data-aos='fade-up'>
                    <PlateCard add={props.add} plate={plate[5]} />
                </div>
                <div className='best col-md-4 col-12' data-aos='fade-up'>
                    <PlateCard add={props.add} plate={plate[12]} />
                </div>
            </div>
        </div>
    )
}

export default Best