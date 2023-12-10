import { owner } from '../BusinessCard/BusinessCard';

const EmailButton = () => {

    const sendEmail = () => {
        window.location.href = `mailto:${owner.email}`;
    }
    return (
        <>
            <button id="sheen" className='btn contact-badge' onClick={sendEmail}>
                <span>
                    <i className="fa fa-envelope"></i>
                </span>
                <span>
                    <p className='text-white'>Email</p>
                    <p className='text-white'>{owner.email}</p>
                </span>
            </button>
        </>
    );
}

export default EmailButton;
