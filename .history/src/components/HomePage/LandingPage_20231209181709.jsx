
import '../../App.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import { owner } from '../../BusinessCard/businessCard';
import { useState } from 'react';

const LandingPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showPhoneAlert, setShowPhoneAlert] = useState(false);

    const individual = '/assets/radu-florin-CwTBt6jyagQ-unsplash.jpg';
    const smallBiz = '/assets/hunters-race-MYbhN8KaaEc-unsplash.jpg';
    const corporate = '/assets/scott-graham-5fNmWej4tAA-unsplash.jpg';

    const copyEmail = () => {
        navigator.clipboard.writeText('bailey.shawn.d@gmail.com')
            .then(() => {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1000);
            })
            .catch(err => {
                console.error('Could not copy email: ', err);
            });
    };
    const copyPhone = () => {
        navigator.clipboard.writeText('555-555-5555')
            .then(() => {
                setShowPhoneAlert(true);
                setTimeout(() => {
                    setShowPhoneAlert(false);
                }, 1000);
            })
            .catch(err => {
                console.error('Could not copy email: ', err);
            });
    };

    const compVar = [
        {
            id: 1,
            src: individual,
            title: 'Individual',
            bookNow: 'https://calendly.com/baileytax/30min'
        },
        {
            id: 2,
            src: smallBiz,
            title: 'Small Business',
            bookNow: 'https://calendly.com/baileytax/30min'
        },
        {
            id: 3,
            src: corporate,
            title: 'Corporate',
            bookNow: 'https://calendly.com//30min'
        }
    ]

    const resources = [
        {
            id: 1,
            title: 'Here is the first resource',
            anchor: 'https://www.google.com'
        },
        {
            id: 2,
            title: 'Here is the second resource',
            anchor: 'https://chat.openai.com'
        },
        {
            id: 3,
            title: 'Here is the third resource',
            anchor: owner.calender
        }
    ]

    return (
        <>
            <main className='text-white'>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h1 className="text-center text-uppercase">Bailey </h1> <h2>Tax & Accounting</h2>
                    </div>
                    <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Aliquam in hendrerit urna.</p>
                    <a className="btn btn-primary m-1" type="button" href={`${resources[2].anchor}`} target="_child"> Schedule Your Consultation </a>
                </div>

                <span className='container-xl'>
                    <div id='bizGroup' className="row d-flex justify-content-evenly">
                        {compVar.map((calendly, index) => (
                            <div id='cardHero' className="w-100 h-100 col-3" key={index}>
                                <a className="card d-flex prime" type='button' href={`${calendly.bookNow}`}>
                                    <div id='cardOption' className="card-img-top shadow-lg rounded-bottom" style={{ position: 'relative' }}>
                                        <img id='coverImage' src={calendly.src} className='img-fluid' alt={calendly.title} style={
                                            {position: 'fixed',height: '100%', width: '100%', objectFit: 'cover'}
                                        } />
                                    </div>
                                    <div className="card-body shadow-lg rounded-bottom" style={{ backgroundColor: '#90480E' }}>
                                        <h5 className="card-title text-white m-0">{calendly.title}</h5>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </span>
            </main>

            <section id='service' className="d-flex justify-content-evenly">
                <div className="container-xl d-flex row">
                    <div className="col d-flex flex-column container-fluid">
                        <h3 className="text-center text-uppercase">Get Ahead with Your Taxes and Accounting</h3>
                        <p>Take control of your finances with expert tax and accounting services. Our professionals are ready to guide you every step of the way.</p>
                        <Link className="btn btn-secondary m-auto my-3" to={`${compVar.bookNow}`} target='_blank'> Schedule Your Consultation </Link>
                        <blockquote className="blockquote">Questions? Reach out to us at <em>{owner.email}</em> {showAlert && <div id='copyMessage'>Email copied to clipboard</div>} <i className='fa fa-copy' onClick={copyEmail}> </i> or call us at {showPhoneAlert && <div id='copyMessage'>Phone copied to clipboard</div>} <em>{owner.phone}</em><i className='fa fa-phone' onClick={copyPhone}> </i> </blockquote>
                    </div>
                </div>
            </section>

            <section id='about' className="d-flex row">
                    <div id='resourceGroup' className="container-lg d-flex justify-content-center gap-4 card-group">
                            <h3 className="text-center text-uppercase text-black">Resources</h3>
                        <div className="w-100 container d-flex col-lg-12 justify-content-lg-center gap-4 row-sm-12">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item lead">Check out these resources here</li>
                                    {resources.map((resource, i) => (
                                        <li key={i} className="list-group-item lead">
                                            <Link to={{ pathname: `${owner.calender}` }} target='_blank'>{resource.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {/* <div className="card-footer">
                                    Card footer
                                </div> */}
                            </div>

                            {/* Replace .map function of the pervious ul lists */}
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item lead">Check out these other resources here!!</li>
                                    <li className="list-group-item"><a href="/path/to/pdf1.pdf" download>W-2 Form</a></li>
                                    <li className="list-group-item"><a href="/path/to/pdf2.pdf" download>1099 Form</a></li>
                                    <li className="list-group-item"><a href="/path/to/pdf3.pdf" download>IRS/GOV Docs</a></li>
                                </ul>
                                {/* <div className="card-footer">
                                    Card footer
                                </div> */}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default LandingPage;
