'use client'
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "../elements/CounterUp"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
}

const Subjects = [
    'PROGRAMMING',
    'MATHEMATICS',
    'SOUND EDITING',
    '3D MODELING',
    'WEB DESIGN',
    'AI RESEARCH',
    'PHOTO EDITING',
    'VIDEO EDITING',
    'DATA SCIENCE',
    'ROBOTICS',
    'GAMING',
    'UI/UX',
    'CRYPTOGRAPHY','. . . . . . More'
];
const generateSequence = (subjects, pauseDuration) => {
    return subjects.flatMap((subject) => [subject, pauseDuration]);
};

export default function Slider1() {
    return (
        <>

            <section className="tf-slider home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                <h1 className="heading"></h1>
                                                <h1 className="heading mb0">ELEVATE</h1>
                                                    <h1 className="heading mb0">
                                                        <span className="animationtext clip">
                                                            <TypeAnimation
            sequence={generateSequence(Subjects, 1000)} // Inserting a 1000ms pause between each subject

                                                                wrapper="span"
                                                                speed={50}
                                                                style={{ display: 'inline-block' }}
                                                                repeat={Infinity}
                                                                className="cd-words-wrapper ms-3">
                                                            </TypeAnimation>
                                                        </span>
                                                    </h1>
                                                    <h1 className="heading">SKILLS WITH US </h1>
                                                    <p className="sub-heading">The best way to deepen your expertise and unlock your full potential</p>
                                                    <div className="counter-wrap">
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={2240} />+
                                                            </div>
                                                            <h6>Simplified Tutorials</h6>
                                                        </div>
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={1000} />+
                                                            </div>
                                                            <h6>Addicted  Users</h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-slider ">
                                                        <Link href="#" className="tf-button " data-toggle="modal" data-target="#popup_bid">SIGN UP FOR FREE</Link>
                                                        <Link href="/collection" className="tf-button style-2">SIGN IN</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                  {/* <img src="/assets/images/slider/slider-8.png" alt="Image" className="img ani5" /> */}
                                                    {/* <img src="/assets/images/slider/slider-7.png" alt="Image" className="ani4 img-1" />
                                                    <img src="/assets/images/slider/slider-6.png" alt="Image" className="ani5 img-2" />  */}
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
