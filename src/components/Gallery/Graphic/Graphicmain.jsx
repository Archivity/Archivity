import React from 'react';
import Graphic from './Graphic';
import Graphic_data from './Graphic_data';
import { NavLink } from 'react-router-dom';

const Graphicmain = () => {
    return (
        <>
            <div className="container-fluid my-5">
            <NavLink to="/" className="btn btn-primary my-3 mx-3">Back</NavLink>
            <h1 className="my-5 text-center" style={{color:"#00A2E3",textDecoration:"underline"}}>Graphic Design Gallery</h1> 
         <div className="row">
         {
           Graphic_data.map((val, ind) => {
                             return <Graphic
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

export default Graphicmain
