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
    {"Name": "Python", "URL": "https://simpleicons.org/icons/python.svg"},
    {"Name": "JavaScript", "URL": "https://simpleicons.org/icons/javascript.svg"},
    {"Name": "C#", "URL": "https://simpleicons.org/icons/csharp.svg"},
    {"Name": "C++", "URL": "https://simpleicons.org/icons/cplusplus.svg"},
    {"Name": "PHP", "URL": "https://simpleicons.org/icons/php.svg"},
    {"Name": "Ruby", "URL": "https://simpleicons.org/icons/ruby.svg"},
    {"Name": "Swift", "URL": "https://simpleicons.org/icons/swift.svg"},
    {"Name": "Go", "URL": "https://simpleicons.org/icons/go.svg"},
    {"Name": "Rust", "URL": "https://simpleicons.org/icons/rust.svg"},
    {"Name": "TypeScript", "URL": "https://simpleicons.org/icons/typescript.svg"},
    {"Name": "Kotlin", "URL": "https://simpleicons.org/icons/kotlin.svg"},
    {"Name": "Scala", "URL": "https://simpleicons.org/icons/scala.svg"},
    {"Name": "Perl", "URL": "https://simpleicons.org/icons/perl.svg"},
    {"Name": "Haskell", "URL": "https://simpleicons.org/icons/haskell.svg"},
    {"Name": "Elixir", "URL": "https://simpleicons.org/icons/elixir.svg"},

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
