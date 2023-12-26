import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Slider.css'

import c1 from './images/carousel1.jpg'
import c2 from './images/carousel2.jpg'
import c3 from './images/carousel3.jpg'
import c4 from './images/carousel4.jpg'

const slider = [c1,c2,c3,c4]

const Carousel = () => {
    return (
        <>
            <div>
                <Nav className="justify-content-end navbar px-5" >
                    <i style={{ fontSize: '30px', colour: 'black', marginRight: '980px' }} class="fa-regular fa-user"></i>
                    <Nav.Item>
                        <Nav.Link className='fs-4 icon' href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='fs-4 icon' href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='fs-4 icon' href="#login">Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='fs-4 icon' href="#menu">Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='fs-4 icon' href="#order">Order</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='carousel d-flex align-items-center p-5' id='home'>
                <div>
                    <div className='carousel-content me-5'>

                        <h1 style={{fontSize: '65px'}}>DESSERT DELIGHT</h1>
                        <hr />
                        <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, mollitia optio. Delectus, sunt architecto nesciunt ipsum ab distinctio eos possimus consequatur.</p>

                    </div>
                </div>

                <Swiper
                    className='swiper w-100 p-5'
                    modules={[Pagination, EffectCoverflow, Autoplay]} effect={"coverflow"} grabCursor={true} centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true
                    }}
                    loop={true}
                    pagination={{ clickable: true }}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 2
                        },
                        1560: {
                            slidesPerView: 3
                        },
                    }}>
                    {
                        slider.map(data => (
                            <SwiperSlide style={{ backgroundImage: `url(${data})`, width: '300px', height: '410px' }} className="swiper-slider">
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Carousel