import React from 'react';
import Port from './Portraits';
import Port_data from './Port_data';
import { NavLink } from 'react-router-dom';

const Portraitsmain = () => {
    return (
        <>
             <div className="container-fluid my-5">
             <NavLink to="/" className="btn btn-primary my-3 mx-3">Back</NavLink>
             <h1 className="my-5 text-center" style={{color:"#00A2E3",textDecoration:"underline"}}>Portraits Gallery</h1> 
         <div className="row">
         {
           Port_data.map((val, ind) => {
                             return <Port
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

export default Portraitsmain
