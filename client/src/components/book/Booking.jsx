import React from 'react'
import {Link} from 'react-router-dom'

const Booking = () => {
  return (
    <section className="bookingpagesection center">
        <div className="bookingpagecontainer">
            <h2>Select your service</h2>
            <div className="bookingpageboxcontainer">
                <div className="bookingpagebox flex">
                    <div className="bookingbox">
                        <div className="bookingboxheader center">
                            <img src="./images/truck.webp" alt="img" />
                        </div>
                        <div className="bookingboxbody">
                            <h2>Man & Van</h2>
                            <p>From $89.99 inc. Vat</p>
                            <div className="bookingboxbutton center">
                                <button><Link style={{color:'white'}} to={'/book/rubbish-clearance'}>Book now</Link></button>
                            </div>
                            <h3>Suitable for:</h3>
                            <div className="bookingaboutcontent">
                                <p>Light bulky waste</p>
                                <p>Domestic & Business</p>
                                <p>Indoor Collection</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookingbox">
                        <div className="bookingboxheader center">
                            <img src="./images/Skip-bag.webp" alt="img" />
                        </div>
                        <div className="bookingboxbody">
                            <h2>Skip Bags</h2>
                            <p>From $13.99 inc. Vat</p>
                            <div className="bookingboxbutton center">
                                <button><Link style={{color:'white'}} to={'/book/skip-bags'}>Book now</Link></button>
                            </div>
                            <h3>Suitable for:</h3>
                            <div className="bookingaboutcontent">
                                <p>Small DIY projects</p>
                                <p>Installation waste</p>
                                <p>Light / Bulky waste</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookingbox">
                        <div className="bookingboxheader center">
                            <img src="./images/truck.webp" alt="img" />
                        </div>
                        <div className="bookingboxbody">
                            <h2>Furniture Removal</h2>
                            <p>From $89.99 inc.Vat</p>
                            <div className="bookingboxbutton center">
                                <button><Link style={{color:'white'}} to={'/book/sofa-removal'}>Book now</Link></button>
                            </div>
                            <h3>Suitable for:</h3>
                            <div className="bookingaboutcontent">
                                <p>Light bulky waste</p>
                                <p>Domestic & Business</p>
                                <p>Indoor Collection</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookingbox">
                        <div className="bookingboxheader center">
                            <img src="./images/truck.webp" alt="img" />
                        </div>
                        <div className="bookingboxbody">
                            <h2>Sofa Removal</h2>
                            <p>From $89.99 inc.Vat</p>
                            <div className="bookingboxbutton center">
                                <button>Book now</button>
                            </div>
                            <h3>Suitable for:</h3>
                            <div className="bookingaboutcontent">
                                <p>Light bulky waste</p>
                                <p>Domestic & Business</p>
                                <p>Indoor Collection</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookingbox">
                        <div className="bookingboxheader center">
                            <img src="./images/truck.webp" alt="img" />
                        </div>
                        <div className="bookingboxbody">
                            <h2>Bin collection</h2>
                            <p>From $89.99 inc.Vat</p>
                            <div className="bookingboxbutton center">
                                <button>Book now</button>
                            </div>
                            <h3>Suitable for:</h3>
                            <div className="bookingaboutcontent">
                                <p>Light bulky waste</p>
                                <p>Domestic & Business</p>
                                <p>Indoor Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Booking