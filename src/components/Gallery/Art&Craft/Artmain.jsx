import React from 'react';
import Gallery from './Art';
import Art_data from './Art_data';
import { NavLink } from 'react-router-dom';

const Artmain = () => {
    return (
        <>
             <div className="container-fluid my-5">
             <NavLink to="/" className="btn btn-primary my-3 mx-3">Back</NavLink>
         <h1 className="my-5 text-center" style={{color:"#00A2E3",textDecoration:"underline"}}>Art & Craft Gallery</h1>
              
         <div className="row">
         {
           Art_data.map((val, ind) => {
                             return <Gallery
                                 img={val.img}
                                 key={ind}
                             />
                             })  

         }
         </div>
</div>
        </>
    )
}

export default Artmain
