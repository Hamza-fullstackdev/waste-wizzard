import React, { useState } from 'react'
import {useLocation, useParams} from 'react-router-dom'

const Booking = () => {
    // const params=useParams();
    const [time,setTime]=useState(null);
    const [formData,setFormData]=useState({});
    const location=useLocation();

    const handleFormData=(e)=>{
        setFormData({
            ...formData,
            time:time,
            [e.target.id]:e.target.value
        })
    }
    console.log(formData)
    return (
        <section className="bookingpagesection center">
            <div className="bookingpagecontainer">
                <h2>Product Details</h2>
                <div className="bookingdetailscontainer flex">
                    <div className="leftbookingdetailssection flex">
                        <div className="leftbookingdetailscontent">
                            <h2>{location.state.data.name}</h2>
                            <p>{location.state.data.description}</p>
                            <h3>£{location.state.data.price}</h3><span>inc. VAT</span>
                            <p>Quantity: {location.state.quantity}</p>
                            <h4>+59 callout charge</h4>
                        </div>
                        <div className="rightbookingdetailscontent">
                            <img src={location.state.data.image} alt={location.state.data.name} />
                        </div>
                    </div>
                    <div className="Rightbookingdetailssection">
                        <h2>Collection Date & Time Slots</h2>
                        <div className="leftbookingdetailcontentcontainer flex">
                            <div className="leftbookingdetailscontent">
                                <div className="leftbookingdate">
                                    <label htmlFor="date">Select specific date:</label><br />
                                    <input type="date" name="date" id="date" onChange={handleFormData}/>
                                </div>
                            </div>
                            <div className="rightbookingdetailscontent">
                                <div className="bookingdateslot" style={{backgroundColor:(time==="Free")?'lightgreen':'#6b66c3'}} onClick={()=>setTime("Free")}>
                                    <h2>Any Free</h2>
                                    <p>Free of cost</p>
                                </div>
                                <div className="bookingdateslot" style={{backgroundColor:(time==="8am-1pm")?'lightgreen':'#6b66c3'}} onClick={()=>setTime("8am-1pm")}>
                                    <h2>Early (8am-1pm)</h2>
                                    <p>$10.00</p>
                                </div>
                                <div className="bookingdateslot" style={{backgroundColor:(time==="After 12pm")?'lightgreen':'#6b66c3'}} onClick={()=>setTime("After 12pm")}>
                                    <h2>Afternoon (After 12pm)</h2>
                                    <p>$10.00</p>
                                </div>
                                <div className="bookingdateslot">
                                    <h2>Choose a two hour time slot</h2>
                                    <p>$25.00</p>
                                    <select id="time" onChange={handleFormData} defaultValue={'Custom Time'}>
                                        <option value="9:00am to 11:00am">9:00AM TO 11:00AM</option>
                                        <option value="10:00am to 12:00pm">10:00AM TO 12:00PM</option>
                                        <option value="11:00am to 1:00pm">11:00AM TO 1:00PM</option>
                                        <option value="12:00pm to 2:00pm">12:00PM TO 2:00PM</option>
                                        <option value="1:00pm to 3:00pm">1:00PM TO 3:00PM</option>
                                        <option value="2:00pm to 4:00pm">2:00PM TO 4:00PM</option>
                                        <option value="3:00pm to 5:00pm">3:00PM TO 5:00PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='collectingheading'>Collecting details</h2>
                <div className="collectingdetailssection flex">
                    <div className="leftcollectingdetailssection">
                        <div className="leftcollectingdetailscontent">
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="fname">First Name:</label><br />
                                    <input type="text" placeholder='First name' id='fname' onChange={handleFormData}/><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="lname">Last Name:</label><br />
                                    <input type="text" placeholder='Last Name' id='lname' onChange={handleFormData}/>
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="email">Email:</label><br />
                                    <input type="email" placeholder='Email' id='email' onChange={handleFormData}/><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="phone">Phone number:</label><br />
                                    <input type="tel" placeholder='Phone number' id='phone' onChange={handleFormData}/>
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="firstaddress">Address Line 1:</label><br />
                                    <input type="text" placeholder='Address line 1' id='firstAddress' onChange={handleFormData}/><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="secondaddress">Address Line 2:</label><br />
                                    <input type="text" placeholder='Address line 2' id='secondAddress' onChange={handleFormData}/>
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="city">City:</label><br />
                                    <input type="text" placeholder='city' id='city' onChange={handleFormData}/><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="country">Country:</label><br />
                                    <input type="text" placeholder='country' id='country' onChange={handleFormData}/>
                                </div>
                            </div>
                            <div className="postalcodeinput">
                                <label htmlFor="postcode">Postcode:</label><br />
                                <input type="text" placeholder='postcode' id='postcode' onChange={handleFormData}/>
                            </div>
                            <div className="descriptioninput">
                                <label htmlFor="description">Waste Description:</label><br />
                                <textarea id="description" rows='5' placeholder='Enter Waste Description' onChange={handleFormData}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="rightcollectingdetailssection">
                        <div className="extrascontainer">
                            <div className="extrasbody">
                                <h2>We cannot take these items</h2>
                                <p><i className="bi bi-x-circle"></i>Asbestos</p>
                                <p><i className="bi bi-x-circle"></i>Paint or paint cans (unless empty)</p>
                                <p><i className="bi bi-x-circle"></i>Liquid chemicals or solvents</p>
                                <p><i className="bi bi-x-circle"></i>Car batteries</p>
                                <p><i className="bi bi-x-circle"></i>Raw meat or meat unless in sealed packaging</p>
                                <p><i className="bi bi-x-circle"></i>Clinical or biological waste</p>
                                <p><i className="bi bi-x-circle"></i>Fire extinguishers</p>
                                <p><i className="bi bi-x-circle"></i>Gas bottles</p>
                                <p><i className="bi bi-x-circle"></i>Fire extinguishers</p>
                            </div>
                            <div className="extrasfooter">
                                <h2>Contact us, if you have chest freezers, air conditioning units, pianos.</h2>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="addtocartbutton">
                        <button>(€ ) Add to bucket</button>
                    </div>
            </div>
        </section>
    )
}

export default Booking