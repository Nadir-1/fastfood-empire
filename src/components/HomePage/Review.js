import React, { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Aos from 'aos';
import Images from '../../images/img';
import "swiper/css";
import "swiper/css/pagination";
import 'aos/dist/aos.css';

const Review = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    }, [])
    const quoteSS = {
        position: 'absolute',
        top: '1.3rem',
        right: '1rem',
        fontSize: '1.25rem',
        color: '#323031'
    }
    const star = (<FontAwesomeIcon icon={['fas', 'star']} style={{ color: 'gold' }} />);
    const starH = (<FontAwesomeIcon icon={['fas', 'star-half-stroke']} style={{ color: 'gold' }} />);
    const starE = (<FontAwesomeIcon icon={['far', 'star']} style={{ color: 'gold' }} />);
    const quote = (<FontAwesomeIcon icon={['fas', 'quote-right']} style={quoteSS} />);
    return (
        <div data-aos='fade-up' className='container-fluid home4 review'>
            <h1>Reviews</h1>
            <Swiper className='swiper-container'
                breakpoints={{
                    width: 300,
                    slidesPerView: 1,
                    768: {
                        spaceBetween: 50,
                        slidesPerView: 3,
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img10} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{star}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="swiper-slide slide">
                    {quote}
                    <div className="user">
                        <img src={Images.img12} alt="" />
                        <div className="user-info">
                            <span>{faker.name.findName()}</span>
                            <div className="stars">
                                {star}{star}{star}{star}{starE}
                            </div>
                        </div>
                    </div>
                    <p>{faker.lorem.words(30)}</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img15} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{star}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img16} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{starE}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img17} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{starH}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img15} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{starH}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img15} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{starH}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide slide">
                        {quote}
                        <div className="user">
                            <img src={Images.img15} alt="" />
                            <div className="user-info">
                                <span>{faker.name.findName()}</span>
                                <div className="stars">
                                    {star}{star}{star}{star}{starH}
                                </div>
                            </div>
                        </div>
                        <p>{faker.lorem.words(30)}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Review