import React from 'react'

const ContactUs = () => {
    return (
        <section className="contactussection center">
            <div className="contactuscontainer">
                <p>contact us</p>
                <h2>Ways you can contact us</h2>
                <div className="contactuscontent flex">
                    <div className="contactusbox">
                        <div className="contactusheader flex">
                            <h2>Let's Chat</h2>
                            <img src="./images/Talk-to-us.webp" alt="talk-to-us" />
                        </div>
                        <div className="contactusbody">
                            <h3>We’re available on web chat during our opening hours.</h3>
                            <p>You can also request a call back and we will call you back at a time to suit you or right away.</p>
                        </div>
                    </div>
                    <div className="contactusbox">
                        <div className="contactusheader flex">
                            <h2>Our location</h2>
                            <img src="./images/Our-location.webp" alt="Our-location" />
                        </div>
                        <div className="contactusbody">
                            <h3>We cover the whole of the UK and cover most collections using our own fleet of vehicles and directly employed staff.</h3>
                            <p>Our head office is in the West Midlands.</p>
                            <div className="contactusaddress flex">
                                <div className="leftcontactusaddress">
                                    <h2>Waste Wizzard</h2>
                                    <p>The Hub</p>
                                    <p>7 Noble Way</p>
                                    <p>Aston</p>
                                    <p>Birmingham</p>
                                    <p>B6 7EU</p>
                                </div>
                                <div className="rightcontactusaddress">
                                    <img src="./images/Our-office.webp" alt="Our-office" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="contactusbox">
                        <div className="contactusheader flex">
                            <h2>Opening Times</h2>
                            <img src="./images/Opening-times.webp" alt="Opening-times" />
                        </div>
                        <div className="contactusbody">
                            <div className="openingtimes">
                                <p>Monday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Tuesday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Wednesday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Thursday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Friday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Saturday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                            <div className="openingtimes">
                                <p>Sunday:</p>
                                <h3>08:00am to 06:00pm</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs