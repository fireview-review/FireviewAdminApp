import Link from "next/link"

export default function Work1() {
    return (
        <>
            <section className="tf-section section-work">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">HOW TO USE <span>GALENAI</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.2s">
                                <div className="image">
                                    <img className="work-image" id="work-1" src="/assets/images/svg/work-1.svg" alt="Connect" />
                                </div>
                                <h6 className="title"><Link href="#">SIGN UP</Link></h6>
                                <p className="content">Register and create your personal profile to start your learning journey.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.3s">
                                <div className="image">
                                    <img className="work-image" id="work-2" src="/assets/images/svg/work-2.svg" alt="Select Course" />
                                </div>
                                <h6 className="title"><Link href="#">SELECT A COURSE</Link></h6>
                                <p className="content">Choose a course from a variety of Trails and Steps tailored to enhance your skills.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.4s">
                                <div className="image">
                                    <img className="work-image" id="work-3" src="/assets/images/svg/work-3.svg" alt="Engage" />
                                </div>
                                <h6 className="title"><Link href="#">ENGAGE WITH CONTENT</Link></h6>
                                <p className="content">Engage with interactive tutorials and practical tasks in the Electron app.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.5s">
                                <div className="image">
                                    <img className="work-image" id="work-4" src="/assets/images/svg/work-4.svg" alt="Complete" />
                                </div>
                                <h6 className="title"><Link href="#">TRACK YOUR PROGRESS</Link></h6>
                                <p className="content">Monitor your progress, earn badges, and review your achievements in your profile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
