// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className='w-100 h-auto bg-black text-white'>
                <div className='container-fluid'>
                <div id='footer' className='d-flex justify-content-evenly'>
                    <button className="btaButton btn m-1" />
                    <div id='footerLinks' className="col d-flex justify-content-center align-items-center text-center py-3 gap-3">
                        <Link className='chunkyLink' to="/link1">Sitemap</Link> |
                        <Link className='chunkyLink' to="/link2">Resources</Link> |
                        <Link className='chunkyLink' to="/link3">Seasonal Ops</Link> |
                        <Link className='chunkyLink' to="/link4">About US</Link>
                        <span>
                            <p className='text-white'>&copy; {new Date().getFullYear()} Bailey Tax & Accounting</p>
                        </span>
                    </div>
                </div>
            </div>
            </footer>
        </>
    );
};

export default Footer;