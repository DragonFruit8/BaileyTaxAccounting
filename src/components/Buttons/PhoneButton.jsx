

const PhoneButton = () => {
    const phone = '+1(734) 333-3333';
    return (
        <>
            <button className='btn contact-badge'>
                <span>
                    <i className="fa fa-phone"></i>
                </span>
                <span>
                    <p className='text-white'>Phone</p>
                    <p className='text-white'>{phone}</p>
                </span>
            </button>
        </>
    );
}

export default PhoneButton;
