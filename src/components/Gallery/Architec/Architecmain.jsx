import React from 'react';
import Archi from './Archi';
import Archi_data from './Archi_data';
import { NavLink } from 'react-router-dom';

const Architecmain = () => {
    return (
        <>
             <div className="container-fluid my-5">
             <NavLink to="/" className="btn btn-primary my-3 mx-3">Back</NavLink>
             <h1 className="my-5 text-center" style={{color:"#00A2E3",textDecoration:"underline"}}>Architectural Design Gallery</h1>
         <div className="row ">
         {
           Archi_data.map((val, ind) => {
                             return <Archi
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

export default Architecmain
