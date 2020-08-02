import React from 'react';
import pic from '../images/image.jpg';
import instac from '../images/insta_c.png';
import adver from '../images/adever.jpg';
import thanks from '../images/thanks.jpg';
import Conatact from './Contact';

const About = () => {
    return (
        <>
            
            <div className="container-fluid d-flex align-content-center justify-content-center" id="about">
                                <div className="card" id="about_me" style={{width: "25rem"}}>
                                    <h1 className="card-title text-center"><span className="span_text">About</span> Me</h1>
                                    <img src={pic} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text text-secondary">I am Ar. Soumya nakhat from Chattisgarh,
                                            India. I completed my Bachelor of Architecture in 2019. By profession I am
                                            an Architect but my love for creative stuff like drawing and handmade items
                                            is persistent. So i started this work with my Architectural work.I had never
                                            been to any class to learn this stuffs. I am self taught artist.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            {/*About_card_section end*/}

                            {/*Follow_card_section start*/}
                            <div className="container-fluid d-flex align-content-center justify-content-center">
                                <div className="card follow_card align-items-center my-5" style={{width: "25rem"}}>
                                    <h2 className="card-title text-center"><span className="span_text">Follow</span> me on</h2>
                                    <a href="https://instagram.com/arch_ivity?igshid=7tk5rudgqhz5"><img src={instac} width="50" alt="..."/></a>
                                </div>
                            </div>
                            {/*Follow_card_section end*/}

                            {/*Advertise_card_section start*/}
                            <div className="container-fluid d-flex align-content-center justify-content-center">
                                <div className="card" id="about_me" style={{width: "25rem"}}>
                                    <h2 className="card-title text-center">Advertisment</h2>
                                    <img src={adver} className="card-img-top" height="300" width="200"
                                        alt="..."/>
                                    <div className="card-body"></div>
                                </div>
                                <div>
                                </div>
                            </div>
                            {/*Advertise_card_section end*/}

                            <Conatact/>


                            {/*Thanks_card_section start*/}

                            <div className="container-fluid d-flex align-content-center justify-content-center my-5">
                                <div className="card" id="about_me" style={{width: "25rem"}}>
                                    <img src={thanks} className="card-img-top" alt="..."
                                        style={{borderRadius: "10px"}}/>
                                </div>
                            </div>

        </>
    )
}

export default About
