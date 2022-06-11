import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { faker } from '@faker-js/faker';

const Header = () => {
    return (
        <div className='container-fluid home'>
            <div className='home-ctn row'>
                <div className='overlay'></div>
                <div className='type col-12'>
                    <h3 className='slogan'>
                        <Typewriter
                            words={['We Dont\'t Serve food ',
                                'And We Dont\'t Care If You Are Hungry',
                                'But...', 'We Are Going To Entertain Your Stomach']}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={20}
                        />
                    </h3>
                    <p>{faker.lorem.words(50)}</p>
                    <NavLink className='btn more-btn' to="/Menu">Explore</NavLink>
                </div>
            </div>
        </div >
    )
}

export default Header