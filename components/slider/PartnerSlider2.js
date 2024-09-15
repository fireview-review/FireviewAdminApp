'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"




const softwares =[
    {"Name": "Clojure", "URL": "https://simpleicons.org/icons/clojure.svg"},
    {"Name": "Dart", "URL": "https://simpleicons.org/icons/dart.svg"},
    {"Name": "Lua", "URL": "https://simpleicons.org/icons/lua.svg"},
    {"Name": "R", "URL": "https://simpleicons.org/icons/r.svg"},
    {"Name": "Visual Studio Code", "URL": "https://simpleicons.org/icons/visualstudiocode.svg"},
    {"Name": "Git", "URL": "https://simpleicons.org/icons/git.svg"},
    {"Name": "Docker", "URL": "https://simpleicons.org/icons/docker.svg"},
    {"Name": "Kubernetes", "URL": "https://simpleicons.org/icons/kubernetes.svg"},
    {"Name": "AWS", "URL": "https://simpleicons.org/icons/amazonaws.svg"},
    {"Name": "Google Cloud", "URL": "https://simpleicons.org/icons/googlecloud.svg"},
    {"Name": "Azure", "URL": "https://simpleicons.org/icons/microsoftazure.svg"},
    {"Name": "MySQL", "URL": "https://simpleicons.org/icons/mysql.svg"},
    {"Name": "PostgreSQL", "URL": "https://simpleicons.org/icons/postgresql.svg"},

]



const swiperOptions2 = {
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
export default function PartnerSlider2() {
    return (
        <>
            <Swiper {...swiperOptions2} className="swiper-wrapper">
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
