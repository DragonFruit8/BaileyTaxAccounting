

const EmailButton = () => {
    
    const email = 'info@BaileyTaxInc.com';
    return (
        <>
            <button className='btn contact-badge'>
                <span>
                    <i className="fa fa-envelope"></i>
                </span>
                <span>
                    <p className='text-white'>Email</p>
                    <p className='text-white'>{email}</p>
                </span>
            </button>
        </>
    );
}

export default EmailButton;
