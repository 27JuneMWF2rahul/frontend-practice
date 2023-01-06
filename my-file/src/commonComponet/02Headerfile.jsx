import React from 'react';
import { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const HeaderCompo = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const MenuObject =  { "/home": "Home", "/about": "About us", "/contact": "Contact Us","/login":"Singin" }
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                {/* <MDBNavbarLink aria-current='Homepage' to='/'>
                                    Home
                                </MDBNavbarLink> */}
                                <Link className='nav-link' to='/Home'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/Features'>Features</Link>
                                {/* <MDBNavbarLink href='/features'>Features</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/Pricing'>Pricing</Link>
                                {/* <MDBNavbarLink href='/pricing'>Pricing</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/About'>About</Link>
                                {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/examples'>Example</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default  HeaderCompo;