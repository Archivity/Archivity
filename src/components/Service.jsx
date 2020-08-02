import React from 'react';
import s1 from '../images/drive-download-20200725T172240Z-001/architecture planning/3D visuallization/PicsArt_07-20-04.45.05.jpg';
import s2 from '../images/drive-download-20200725T172240Z-001/PicsArt_06-30-09.11.27.jpg';
import s3 from '../images/drive-download-20200725T172240Z-001/ink potrait/p4.jpg';
import s4 from '../images/drive-download-20200725T172240Z-001/graphic desgin/PicsArt_06-22-07.17.13.jpg';



const Service = () => {
    return (
        <>

<div className="service_main container-fluid my-5" id="service">
                                    <h1>SERVICES</h1>
                                    <div className="row my-5 gy-5 s_card_row">
                                        <div className="col-md-6 col-12">
                                            <div to="/art_craft" className="card" id="service_card">
                                                <img src={s1}
                                                    width="100%" height="200" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h3 className="card-title">Architectural Design</h3>
                                                        <ul>
                                                            <li>planing consultancy</li>
                                                            <li>3D modeling</li>
                                                            <li>interior design</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="card" id="service_card">
                                                    <img src={s2}
                                                        width="100%" height="200" className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h3 className="card-title">Art & Craft</h3>
                                                            <ul>
                                                                <li>Handmade gift</li>
                                                                <li>Personalized digital gift</li>
                                                                <li>Chocolate Bouquet</li>
                                                                <li>String art</li>
                                                                <li>Fluid art</li>
                                                                <li>Canvas wall art painting</li>
                                                            </ul>
                                                        </div>
                                            </div>
                                                </div>
                                            
                                                <div className="w-100"></div>

                                            
                                                <div className="col-md-6 col-12">
                                                    <div className="card" id="service_card">
                                                        <img src={s3}
                                                            width="100%" height="200" className="card-img-top" alt="..."/>
                                                            <div className="card-body">
                                                                <h3 className="card-title">Portraits</h3>
                                                                <ul>
                                                                    <li>pencil Potrait</li>
                                                                    <li>ink Potrait</li>
                                                                    <li>digital Potrait </li>
                                                                    <li>Illustration</li>
                                                                </ul>
                                                            </div>
                                            </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="card" id="service_card">
                                                            <img src={s4}
                                                                width="100%" height="200" className="card-img-top" alt="..."/>
                                                                <div className="card-body">
                                                                    <h3 className="card-title">Graphic Design</h3>
                                                                    <ul>
                                                                        <li>Logo design </li>
                                                                        <li>business card design </li>
                                                                        <li>digital invitation</li>
                                                                        <li>poster design.</li>
                                                                    </ul>
                                                                </div>
                                            </div>
                                                        </div>
                                                    
                                                </div>
                                                </div>
            
        </>
    )
}

export default Service
