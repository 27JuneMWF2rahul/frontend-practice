// import { MDBCardBody } from 'mdb-react-ui-kit';
import React from 'react';
import Prod from './prod3.jpg'
import Componetcard from './04componetcard'
const PropsInClassCompo = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Ultra-compact and portable USB flash drive,Capless design
Share your photos, videos, songs and other files between computers with ease,care number:18001205899/18004195592" imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp" /> </div>
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Protect your private files with included SanDisk SecureAccess software
Includes added protection of secure online backup (up to 2GB optionally available) offered by YuuWaa" imgSrc="https://m.media-amazon.com/images/I/31RnsG72nGL._AC_SR320,320_.jpg" /> </div>
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Password-protect your sensitive files. Customer care:IndiaSupport@sandisk.com Importer Details:Rashi Peripherals Pvt. Ltd. Rashi Complex,A" imgSrc="https://m.media-amazon.com/images/I/31C-se7DQrL._AC_SR320,320_.jpg" /> </div>
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Password-protect your sensitive files. Customer care:IndiaSupport@sandisk.com Importer Details:Rashi Peripherals Pvt. Ltd. Rashi Complex,A" imgSrc={Prod} /> </div>
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Password-protect your sensitive files. Customer care:IndiaSupport@sandisk.com Importer Details:Rashi Peripherals Pvt. Ltd. Rashi Complex,A" imgSrc={window.location.origin + '/Sample.jpg'}  /> </div>
                <div className="col-lg-3 col-md-4 col-sm-6"><Componetcard prodTitle="Password-protect your sensitive files. Customer care:IndiaSupport@sandisk.com Importer Details:Rashi Peripherals Pvt. Ltd. Rashi Complex,A" imgSrc={process.env.PUBLIC_URL + '/download.jpg'}  /> </div>
               
            </div>


        </>
    );
};

export default PropsInClassCompo;