import React from 'react';
import logo from '../images/archivity_sqr_logo.png';
import instac from '../images/insta_c.png';
import { Link } from 'react-scroll';
import {Link as NavLink} from 'react-router-dom';

const Navbar = () => {
    

    return (
        <>

            <header className="container-fluid mx-auto nav_style" id="myHeader">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" exact="true" smooth={true} duration={1000} className="navbar-brand"><img src={logo} width="50" height="50" className="img-fluid" alt="..."></img></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to="home"  className="nav-link" exact="true" style={{ color: "#00A2E3" }}>Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="about" exact="true"  smooth={true} duration={1000} className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/art&craft" exact="true" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Gallery
                                        </Link>
                                        <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
                                            <NavLink to="/portraits" exact="true"  className="dropdown-item">Portraits</NavLink>
                                            <NavLink to="/art&craft" exact="true"   className="dropdown-item" >Art & Craft</NavLink>
                                            <NavLink to="/architectural" exact="true"  className="dropdown-item" >Architectural Design</NavLink>
                                            <NavLink to="/graphic" exact="true"  className="dropdown-item">Graphic Design</NavLink>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="https://instagram.com/arch_ivity?igshid=7tk5rudgqhz5">View On &emsp;<img src={instac} width="20" height="20" alt="..."/></a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="service"  smooth={true} duration={1000} exact="true" className="nav-link">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="contact"  smooth={true} duration={1000} exact="true" className="nav-link" >Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
