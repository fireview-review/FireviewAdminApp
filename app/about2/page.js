
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Team2 from "@/components/sections/Team2"
import PartnerSlider1 from "@/components/slider/PartnerSlider1"
import PartnerSlider2 from "@/components/slider/PartnerSlider2"
import TeamSlider from "@/components/slider/TeamSlider"
import Link from "next/link"
export default function About2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3} >
                <div>
                    <section className="tf-section tf-about style-2">

                        <div className="tf-container">
                            <div className="row ">
                                
                                <div className="col-xl-6 col-lg-5 col-md-12 ">
                                <div className="slider-item">
                            <div className="tf-team">
                                
                                <div className="image">
                                    <img src="/assets/images/item-details.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Ralph Edwards</Link></h4>
                                <p className="position">Founder</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>

                            </div>
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

                        </div>{/* item*/}
                                    <div className="tf-heading style-2 wow fadeInUp">

                                        {/* <p className="sub-heading">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p> */}
                                    </div>
       
                                    <Link href="/about1" className="tf-button style-2 wow fadeInUp">READ MORE</Link>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-12">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step  wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        01
                                                    </div>
                                                    <h3>high quaility</h3>
                                                </div>
                                                <p>Cםורדק</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        02
                                                    </div>
                                                    <h3>BIG COLLECTION</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        03
                                                    </div>
                                                    <h3>TOP RESOURCE</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        04
                                                    </div>
                                                    <h3>BIG COMMUNITY</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="tf-container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="tf-heading mb60 ">
                                        <h2 className="heading"> MY BADGES</h2>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                        <PartnerSlider1 />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                </div>

            </Layout>
        </>
    )
}