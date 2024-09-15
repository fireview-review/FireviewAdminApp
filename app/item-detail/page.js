'use client'
import CountDownTime from "@/components/elements/CountDownTime"
import CounterUp from "@/components/elements/CounterUp"
import ThreeDCharacter from "@/components/elements/ThreeDCharacter"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const exampleCourseDetails = [
    { id: "001", name: "#Python101", imageUrl: "/assets/images/courseExamples/courseExample1.png" },
    { id: "002", name: "#WebBasics202", imageUrl: "/assets/images/courseExamples/courseExample2.png" },
    { id: "003", name: "#DeepAI303", imageUrl: "/assets/images/courseExamples/courseExample3.png" },
    { id: "004", name: "#LogoDesign404", imageUrl: "/assets/images/courseExamples/courseExample4.png" },
    { id: "005", name: "#Agile205", imageUrl: "/assets/images/courseExamples/courseExample5.png" },
    { id: "006", name: "#Crypto101", imageUrl: "/assets/images/courseExamples/courseExample6.png" },
    { id: "007", name: "#HealthData303", imageUrl: "/assets/images/courseExamples/courseExample7.png" },
    { id: "008", name: "#CyberSec101", imageUrl: "/assets/images/courseExamples/courseExample8.png" },
    { id: "009", name: "#SEO202", imageUrl: "/assets/images/courseExamples/courseExample1.png" },
    { id: "010", name: "#EcoBiz101", imageUrl: "/assets/images/courseExamples/courseExample2.png" },
    { id: "011", name: "#UXDesign202", imageUrl: "/assets/images/courseExamples/courseExample3.png" },
    { id: "012", name: "#3DAnimate303", imageUrl: "/assets/images/courseExamples/courseExample4.png" },
    { id: "013", name: "#iOSDev404", imageUrl: "/assets/images/courseExamples/courseExample5.png" },
    { id: "014", name: "#StatsWithR101", imageUrl: "/assets/images/courseExamples/courseExample6.png" },
    { id: "015", name: "#UnityGaming205", imageUrl: "/assets/images/courseExamples/courseExample7.png" }
];
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-collection-next",
        prevEl: ".button-collection-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}
export default function ItemDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3} >
                <div>




                <section className="tf-section tf-about style-2">
                        <div className="tf-container">
                            <div className="row">


                                <div className="col-lg-6 col-md-12" >
                                    <div className="tf-item-detail-image" >
                                        <div style={{ height: "600px"}}>
                                            <ThreeDCharacter modelUrl="/assets/3dmodels/test1/test2.glb" />
                                            <div className="counter-wrap">
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Completed Sessions</h6>
                                            <div className="content">
                                                <CounterUp count={12222} data-speed={2000} />
                                            </div>
                                        </div>
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Galena's</h6>
                                            <div className="content">
                                                <CounterUp count={1892333} data-speed={2000} />  {"    "}    
                                    <img src="/assets/images/slider/galena3.png" alt="Image" style={{height: "80px"}} />

                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="tf-item-detail-inner">
                                    <h4 className="title">PROFILE CARD</h4>

                                        <div className="slider-item">
                            <div className="tf-team">
           
                                <h4 className="name"><Link href="/team">Ralph Edwards</Link></h4>
                                <p className="position">Master</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>

                            </div>


                        </div>{/* item*/}
                        <h4 className="title">AWARDS & MILESTONES</h4>

                                        <div className="infor-item-wrap">
                                            <div className="infor-item-box">
                                                <div className="category">Clothing</div>
                                                <h4 className="name">SNAKE</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Eyes</div>
                                                <h4 className="name">MIX</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Face</div>
                                                <h4 className="name">GREEN</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Skin</div>
                                                <h4 className="name">GREEN</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Background</div>
                                                <h4 className="name">GREEN LIGHT</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Special</div>
                                                <h4 className="name">CAT</h4>
                                            </div>
                                        </div>
                                        <div className="group-btn">
                                            <Link href="#" className="tf-button opensea"><i className="icon-fl-mess" /> EXPLORE INTERESTS</Link>
                                            <div className="group-2">
                                                <Link href="#" className="tf-button style-2 "><i className="icon-fl-wallet" /> BUY GALENA's</Link>
                                                <Link href="#" className="tf-button style-2 twitter"><i className="icon-fl-send" /> SHARE PROFILE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section><br></br><br></br>
                    <section className=" tf-collection ">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tf-heading mb40">
                                        <h4 className="heading">RECOMMENDED FOR YOU</h4>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="swiper-container collection visible">
                                        <Swiper {...swiperOptions} className="swiper-wrapper ">
                                        {exampleCourseDetails.map((course, index) => (
                                        <SwiperSlide key={index}>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                        <img src={course.imageUrl} alt={course.name} />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">{course.name}</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                    ))}       
                                        </Swiper>
                                        <div className="group-btn-nav">
                                            <div className="swiper-button-prev button-collection-prev" />
                                            <div className="swiper-button-next button-collection-next" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}