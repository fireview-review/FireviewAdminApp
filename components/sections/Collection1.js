'use client'
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
];


const exampleCourseDetails2 = [
    { id: "008", name: "#CyberSec101", imageUrl: "/assets/images/courseExamples/courseExample8.png" },
    { id: "009", name: "#SEO202", imageUrl: "/assets/images/courseExamples/courseExample9.png" },
    { id: "010", name: "#EcoBiz101", imageUrl: "/assets/images/courseExamples/courseExample10.png" },
    { id: "011", name: "#UXDesign202", imageUrl: "/assets/images/courseExamples/courseExample11.png" },
    { id: "012", name: "#3DAnimate303", imageUrl: "/assets/images/courseExamples/courseExample12.png" },
    { id: "013", name: "#iOSDev404", imageUrl: "/assets/images/courseExamples/courseExample13.png" },
    { id: "014", name: "#StatsWithR101", imageUrl: "/assets/images/courseExamples/courseExample1.png" },
    { id: "015", name: "#UnityGaming205", imageUrl: "/assets/images/courseExamples/courseExample2.png" }
];
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 5000,
    // disableOnInteraction: false
}

export default function Collection1() {
    return (
        <>

            <section className=" tf-collection ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="swiper-container collection-1 visible">
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
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tf-container-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container collection-2 visible">
                                <Swiper {...swiperOptions2} className="swiper-wrapper ">
                                {exampleCourseDetails2.map((course, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slider-item">
                                                <div className="tf-product">
                                                    <div className="image">
                                                        <img src={course.imageUrl} alt={course.name} />
                                                    </div>
                                                    <h6 className="name"><Link href="/item-detail">{course.name}</Link></h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
