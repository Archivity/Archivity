import React  from 'react';
import sqr_logo from '../images/archivity_sqr_logo.png';
import p1 from '../images/drive-download-20200725T172240Z-001/mordern art/PicsArt_04-02-02.17.37.jpg';
import p2 from '../images/drive-download-20200725T172240Z-001/wooden thali/PicsArt_07-03-05.13.24.jpg';
import p3 from '../images/drive-download-20200725T172240Z-001/bottel art/PicsArt_06-07-12.31.11.jpg';
import p4 from '../images/drive-download-20200725T172240Z-001/architecture planning/3D visuallization/PicsArt_06-15-11.05.46.jpg';
import Gallery from './Gallery';
import Gallery_data from './Gallery_data';
import Service from './Service';


const Left_sec = () => {
   

    return (
        <>

            <div className="container">
                <figure>
                    <img src={sqr_logo} className="img-fluid" alt="..."/>
                </figure>
            </div>
            <div className="container-fluid  align-content-center justify-content-center">
                <h4 className="left_text" style={{ textTransform: "uppercase" }}><span className="span_text">ARCHIVITY</span>
                     (Architectural +<span className="span_text"> creativity</span>)
                                </h4>
                <div className="row">
                    <div className="col-md-6 col-6">
                        <figure className="d-flex my-5 archi_img_main">
                            <img className="img-fluid archi_img"
                                src={p1} alt="..."/>
                            <img className="img-fluid archi_img"
                                src={p2} alt="..."/>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-6">
                        <figure className="d-flex  archi_img_main">
                            <img className="img-fluid archi_img"
                                src={p3} alt="..."/>
                            <img className="img-fluid archi_img"
                                src={p4} alt="..."/>
                        </figure>
                    </div>
                </div>


                <div className="text-center container">
                    <h5 className="card-text my-5">
                        I make all sorts of gifts,posters,bussiness card, calendar,digital marketing
                        designs
                        and more! l love to work on 3-D vissiualzation, Planning and will render you
                        every
                        kind of architectural service.Anything and everything is a great challenge and
                        I'm
                        always happy to explore custom ideas!
                        Each item is made with love by me, and every small detail is very important.

                        I hope you love what you see and find something you’re looking for, but please
                        contact me if you have any specific requirements or an idea for a custom make as
                        I
                        would love to help where I can! Clients are most welcome 

                        Come join me and my lovely followers on Instagram @arch_ivity, I love sharing
                        what I
                        am working on with the world!

                        Have a wonderful day and thank you for stopping by and for infinite love and
                        support.
                                    </h5>
                </div>

                <Service />



                <div className="gallery_img text-center my-5">
                    <div className="container">
                        <h1>Gallery</h1>

                        <div className="row">
                            {
                                Gallery_data.map((val, ind) => {
                                    return <Gallery
                                        img={val.img}
                                        key={ind}
                                    />
                                   
                                   
                                })
                            }
                        </div>
                       

                    </div>
                </div>

            </div>

        </>
    )
}

export default Left_sec;
