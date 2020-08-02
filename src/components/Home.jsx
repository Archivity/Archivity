import React from 'react';
import logo from '../images/archiry_round_logo.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Left from './Left';
import CopyrightIcon from '@material-ui/icons/Copyright';
import instac from '../images/insta_c.png';
import gmail from '../images/gmail.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.svg';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";




const Home = () => {
    return (
        <>
        
        
            {/*Header start*/}
            <div className="container-fluid mx-auto logo_header my-4" id="home">
                <div className="row">
                    <div className="col-md-10 col-12 text-center mx-auto">
                        <div className="row main_header">
                            <div className="col-md-4 col-4"><a href="mailto:Ar.soumyanakhat@gmail.com"><p><MailOutlineIcon /><span className="header_text"> Ar.soumyanakhat@gmail.com</span></p></a></div>
                            <div className="col-md-4 col-4"><a href="/"><img src={logo} className="img-fluid" width="100" height="100" alt="..." /></a></div>
                            <div className="col-md-4 col-4"><a href="https://instagram.com/arch_ivity?igshid=7tk5rudgqhz5"><p><InstagramIcon /><span className="header_text"> arch_ivity

</span></p></a></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header end*/}
            <Navbar/>
            <Carousel/>

            <div className="container-fluid mx-auto main_section">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row main_row">
                    <div className="col-lg-6 col-12 text-center" id="first_col">
                        <Left/>
                    </div>
                    <div className="col-lg-6 col-12 my-5" id="second_col">
                        <About/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    {/*footer start*/}
            <footer className="container-fluid mx-auto footer">
                <div className="row">
                <div className="col-md-4 col-12 text-center mx-auto">
         <h5>Follow Me On</h5>
                    <div className="d-flex flex-wrap flex-row justify-content-around">
                       <a href="https://www.instagram.com/vipinsingh4596/"> <img src={instac} width="30" height="30" alt="..."/></a>
                       <a href="mailto:viprock234@gmail.com"><img src={gmail} width="30" height="30" alt="..."/></a>
                        <a href="whatsapp://send?phone=+917974709527"><img src={whatsapp} width="30" height="30" alt="..."/></a> 
                        <a href="https://www.linkedin.com/in/vipin-singh-869390158"> <img src={linkedin} width="30" height="30" alt="..."/></a>
                    </div>
                </div>
                    <div className="col-md-4 col-12 text-center mx-auto">
                        <h5>Developed By <a href="https://vipin7974.github.io/vipin-singh.github.io/">Vipin Singh</a></h5>
                        <p>For more,please <a href="https://vipin7974.github.io/vipin-singh.github.io/">Click here.</a></p>
                    
                        <h6><CopyrightIcon/>All Copyrights are reserved 2020</h6>
                    </div>
                    <div className="col-md-4 col-12 text-center mx-auto">
                        <h5>Contact Me</h5>
                        <h6> +917974709527</h6>
                    </div>
                </div>
            </footer>
            {/*footer end*/}
            <div>
        <ScrollUpButton
        style={{zIndex:"3"}}
        AnimationDuration={2000} />
      </div>
            
 
        </>
    )
}

export default Home
