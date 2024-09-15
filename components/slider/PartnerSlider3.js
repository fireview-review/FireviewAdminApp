'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
}

const softwares =[
    {"Name": "MongoDB", "URL": "https://simpleicons.org/icons/mongodb.svg"},
    {"Name": "Redis", "URL": "https://simpleicons.org/icons/redis.svg"},
    {"Name": "Node.js", "URL": "https://simpleicons.org/icons/nodedotjs.svg"},
    {"Name": "TensorFlow", "URL": "https://simpleicons.org/icons/tensorflow.svg"},
    {"Name": "React", "URL": "https://simpleicons.org/icons/react.svg"},
    {"Name": "Angular", "URL": "https://simpleicons.org/icons/angular.svg"},
    {"Name": "Adobe Photoshop", "URL": "https://simpleicons.org/icons/adobephotoshop.svg"},
    {"Name": "Adobe Premiere Pro", "URL": "https://simpleicons.org/icons/adobepremierepro.svg"},
    {"Name": "Adobe After Effects", "URL": "https://simpleicons.org/icons/adobeaftereffects.svg"},
    {"Name": "Audacity", "URL": "https://simpleicons.org/icons/audacity.svg"},
    {"Name": "Adobe Lightroom", "URL": "https://simpleicons.org/icons/adobelightroom.svg"}
]

export default function PartnerSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} >
            {softwares.map((software, index) => (
                                <SwiperSlide>
                                <div className="slider-item">
                                    <div className="tf-partner">
                                        <img src={software.URL} alt="Image" style={{height: "50px"}} />                       
                                        <div>{software.Name+""}</div>

                                    </div>
                                </div>{/* item*/}
                            </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}
