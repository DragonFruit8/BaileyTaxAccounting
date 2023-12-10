// import React from 'react'
import PhoneButton from '../components/Buttons/PhoneButton'
import EmailButton from '../components/Buttons/EmailButton'
import '../App.css'
import '../index.css'

const Navbar = () => {
    

    return (
        <>
            <header className="d-flex justify-content-center py-2">
                <nav className='w-100 h-100 mr-0'>
                    <span className="w-100">
                        <button className="btaButton btn m-1" onClick={} />
                        <div id='contactIcons' className='d-lg-flex w-100 justify-content-end'>
                            <PhoneButton />
                            <EmailButton />
                        </div>
                    </span>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
