import React from 'react';
import c1 from '../images/archi.png';
import c2 from '../images/arc.png';
import c3 from '../images/graphic.png';
import c4 from '../images/custom – 2.png';

const Carousel = () => {
    return (
        <>

            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={c1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={c4} className="d-block w-100" alt="..." />
                    </div>


                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                
            
        </>
    )
}

export default Carousel
