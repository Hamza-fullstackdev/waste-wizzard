import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="herosection">
            <div className="herocontainer">
                <Header />
                <div className="herocontent flex">
                    <div className="leftherosection">
                        <h2>Book your</h2>
                        <h1>rubbish removal</h1>
                        <h2>and say goodbye to waste.</h2>
                        <p>Clearabee is the UKs largest Man & Van clearance company.</p>
                        <div className="leftherooffer">
                            <p>Man & Van</p>
                            <Link sx={{ color: 'white' }} to={'/book'}>
                                <button>Book now</button></Link>
                        </div>
                    </div>
                    <div className="rightherosection">
                        <div className="rightherocontent">
                            <img src="./images/logo.png" alt="company-logo" />
                            <p>4.8 out of 5 based on 25,754 reviews</p>
                            <p>Waste carriers licence: CBDU61392</p>
                        </div>
                        <img src="./images/heroimage.png" className="heroimg" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero