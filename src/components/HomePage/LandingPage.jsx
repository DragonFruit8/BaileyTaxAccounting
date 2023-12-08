
import '../../App.css'
import '../../index.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {

    const compVar = [
        {
            image: 'https://via.placeholder.com/image/300x300/image=image1',
            title: 'Individual',
            bookNow: 'https://calendly.com/baileytax/30min'
        },
        {
            image: 'https://via.placeholder.com/image/300x300/image=SmallBusiness',
            title: 'Small Business',
            bookNow: 'https://calendly.com/baileytax/30min'
        },
        {
            image: 'https://via.placeholder.com/image/300x300/image=Corporate',
            title: 'Corporate',
            bookNow: 'https://calendly.com/baileytax/30min'
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
            anchor: 'https://calendly.com/baileytax/30min'
        }
    ]

    return (
        <>
            <main className='text-white'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div>
                        <h1 className="text-center text-uppercase">Bailey </h1> <h2>Tax & Accounting</h2>
                    </div>
                    <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Aliquam in hendrerit urna.</p>
                    <a className="btn btn-primary m-1" type="button" href={`${resources[2].anchor}`} target="_child"> Schedule Your Consultation </a>
                </div>

                <span className='container'>
                    <div id='bizGroup' className="row d-flex justify-content-evenly">
                        {compVar.map((item) => (
                            <div id='cardHero' className="col" key={item}>
                                <a className="card d-flex" type='button' >
                                    <div id='cardOption' className="card-img-top flex-fill" style={{ position: 'relative'}}>
                                        <img src={item.image} className='img-fluid' alt={item.title} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', textAlign: 'center', textJustify: 'center', }} />
                                    </div>
                                    <div className="card-body" style={{ backgroundColor: '#90480E' }}>
                                        <h5 className="card-title text-white m-0">{item.title}</h5>
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
                        <button className="btn btn-secondary m-auto my-3"> Schedule Your Consultation </button>
                        <blockquote className="blockquote">Questions? Reach out to us at bailey.shawn.d@gmail.com or call us at 555-555-5555</blockquote>
                    </div>
                </div>
            </section>

            <section id='about' className="d-flex row">
                <div className="">
                    <div id='resourceGroup' className="container-lg d-flex justify-content-center gap-4 card-group">
                        
                            <div className="w-100 container d-flex col-lg-12 justify-content-lg-center gap-4 row-sm-12">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item lead">Check out these resources here</li>
                                        {resources.map((resource, i) => (
                                            <li key={i} className="list-group-item lead">
                                                <Link to={`${resource.anchor}`}>{resource.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="card-footer">
                                        Card footer
                                    </div>
                                </div>
                                                        
                                                        {/* Replace .map function of the pervious ul lists */}
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item lead">Check out these other resources here!!</li>
                                        <li className="list-group-item"><a href="/path/to/pdf1.pdf" download>W-2 Form</a></li>
                                        <li className="list-group-item"><a href="/path/to/pdf2.pdf" download>1099 Form</a></li>
                                        <li className="list-group-item"><a href="/path/to/pdf3.pdf" download>IRS/GOV Docs</a></li>
                                    </ul>
                                    <div className="card-footer">
                                        Card footer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default LandingPage;
