import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeaderFile from '../commonComponet/02Headerfile';
const Examples = () => {
    return (
        <>
        <HeaderFile/>
         <div className="container">
            <div className="row my-3">
                <div className="col-6">
                    <Link to="classcomponent">Class Componet</Link>
                </div>
                <div className="col-6">
                    <Link to="functionalcomponet">functional Componet</Link>
                </div>
            </div>
            <div className="row my-3">
              
                <div className="col-6">
                  <Outlet></Outlet>
                </div>
            </div>
         </div>
        </>
    );
};

export default Examples;