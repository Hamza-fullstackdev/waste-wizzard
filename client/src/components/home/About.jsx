import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="aboutcompanysection">
        <img src="./images/sideimg.png" className="sideimg" alt="img"/>
        <div className="aboutcompanycontainer center">
            <div className="aboutcompanycontent">
                <p>About</p>
                <h2>Why Waste wizzard?</h2>
                <h3>Clearabee is the UK’s largest clearance company, operating all over the UK and providing rubbish clearance, skip hire, skip bag and business waste services to homes and businesses.</h3>
                <p>Our national services are usually available on a same-day or next-day basis and many of our services (such as man and van) are provided  exclusively by our own in-house fleet of vehicles.</p>
            </div>
        </div>




        <div className="aboutcompanyratingsection center">
            <div className="aboutcompanyratingcontainer flex">
                <div className="aboutcontainerbox flex">
                    <div className="leftaboutcompanyratingcontainer">
                        <h2>Recycling & CO₂</h2>
                        <h3>We only use waste facilities that have been audited and that can show they are efficient at recycling and diverting waste.</h3>
                        <p>Our fleet of vehicles are stationed around the uk which allows us to make short journeys to each job. Each van is built on a lightweight chassis to help reduce the carbon that is emitted.</p>
                    </div>
                    <div className="rightaboutcompanyratingcontainer">
                        <img src="./images/CO2.webp" alt="Co2"/>
                    </div>
                </div>
                <div className="aboutcontainerbox flex">
                    <div className="leftaboutcompanyratingcontainer">
                        <h2>5-star rated</h2>
                        <h3>Don’t just take our word for it: we’re the highest-rated and most-reviewed, truly nationwide ‘man and van’ rubbish clearance company in the UK on Trustpilot.</h3>
                        <p>See why our customers love our on-demand, rubbish removal service.</p>
                    </div>
                    <div className="rightaboutcompanyratingcontainer">
                        <img src="./images/5-star-reviews.webp" alt="Co2"/>
                    </div>
                </div>
                <div className="aboutcontainerbox flex">
                    <div className="leftaboutcompanyratingcontainer">
                        <h2>Nationwide</h2>
                        <h3>Our on-demand and same-day waste removal services are available across the country.</h3>
                        <p>So whether you’re in London, Bristol, Edinburgh, Leeds, Birmingham, Belfast or almost anywhere else in the UK, we will have one of our own, in-house teams local to you.</p>
                    </div>
                    <div className="rightaboutcompanyratingcontainer">
                        <img src="./images/Nationwide.webp" alt="Co2"/>
                    </div>
                </div>
                <div className="aboutcontainerbox flex">
                    <div className="leftaboutcompanyratingcontainer">
                        <h2>UK’s largest</h2>
                        <h3>We’re the UK’s largest ‘man & van’ rubbish clearance company.</h3>
                        <p>With a large in-house fleet of over 100 vehicles and almost 300 directly-employed staff, you can trust us to handle your rubbish responsibly. We complete thousands of jobs every week for homes, businesses and we work directly for some of the UK’s best known brands.</p>
                    </div>
                    <div className="rightaboutcompanyratingcontainer">
                        <img src="./images/UKs-largest.webp" alt="Co2"/>
                    </div>
                </div>      
            </div>
        </div>


        <section className="wastecalculatorsection center">
            <div className="wastecalculatorcontainer flex">
                <div className="leftwastecontainer">
                    <h2>Waste wizzards</h2>
                    <h3>The loyalty scheme for trade users and regular customers. Start saving on your waste today.</h3>
                    <h1>Get up to 10%
                        Beeloyal account credit on clearances and
                        5% on skip hire.</h1>

                        <button>Join the club</button>
                </div>
               
                <div className="rightwastecontainer">
                    <div className="wastecalculator flex calculatorheight">
                        <div className="leftaboutcompanyratingcontainer">
                            <h2>Waste Calculator</h2>
                            
                            <p>Use our fun waste calculator to add the items of waste you need collecting and we will provide an estimate of the cost.</p>
                            <button>Try our waste calculator</button>
                        </div>
                        <div className="rightaboutcompanyratingcontainer calculatorwidth">
                            <img src="./images/Waste-calculator-1.webp"alt="Co2"/>
                        </div>
                    </div>
                    <div className="tradeaccount flex calculatorheight">
                        <div className="leftaboutcompanyratingcontainer">
                            <h2>Trade account</h2>
                            
                            <p>Start earning account credit from your first clearance. Instant set-up and online management.</p>
                            <Link to={'/signup'}><button>Signup now</button></Link>
                        </div>
                        <div className="rightaboutcompanyratingcontainer calculatorwidth">
                            <img src="./images/Trade-waste.webp"alt="Co2"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default About