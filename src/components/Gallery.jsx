import React from 'react';

const Gallery = (props) => {
    return (
        <>

        <div className="col-md-6 col-6 gal_col ">
            <figure className="gal_img">
            <img className="img-fluid " src={props.img} alt="..." />
            </figure>
        </div>


        </>
    )
}

export default Gallery
