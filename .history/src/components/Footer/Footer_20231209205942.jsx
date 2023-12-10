// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className='w-100 h-auto bg-black text-white'>
                <div className='container-xl'>
                <div id='footer' className='d-flex justify-content-evenly'>
                    <button className="btaButton btn m-1" />
                    <div id='footerLinks' className="col d-flex justify-content-end align-items-center text-center py-3 gap-3">
                        <className='chunkyLink' to="/link1">Sitemap</className=> |
                        <className='chunkyLink' to="/link2">Resources</className=> |
                        <className='chunkyLink' to="/link3">Seasonal Ops</className=> |
                        <className='chunkyLink' to="/link4">About US</className=>
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