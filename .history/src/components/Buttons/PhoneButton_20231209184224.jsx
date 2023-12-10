import { owner } from '../BusinessCard/BusinessCard';

const PhoneButton = () => {

    const callNumber = () => {
        window.location.href = `tel:${owner.phone}`;
    }

    return (
        <>
            <div className='btn contact-badge' >
                <a className="w-100 d-flex flex-fill" onClick={callNumber}>
                    <span>
                        <i className="fa fa-phone"></i>
                    </span>
                    <span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>{owner.phone}</p>
                    </span>
                </a>
            </div>
        </>
    );
}

export default PhoneButton;
