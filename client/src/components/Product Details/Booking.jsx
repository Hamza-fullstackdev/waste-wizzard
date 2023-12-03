import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar';

const Booking = () => {
    const [time, setTime] = useState(null);
    const [formData, setFormData] = useState({});
    const [extrasProduct, setExtraProduct] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [quantities, setQuantities] = useState({});
    const [selectedProducts, setSelectedProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = localStorage.getItem("User")

    const calloutCharges = 59.99;
    let priceByTime = 0;
    const timeSlot = function () {
        if (time === "Free") {
            priceByTime = 0
        } else if (time === "8am-1pm") {
            priceByTime = 10
        } else if (time === "After 12pm") {
            priceByTime = 10
        }
        else {
            priceByTime = 25
        }
        return priceByTime;
    }

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`http://localhost:8000/api/product/get-products/extras`, {
                credentials: 'include',
                method: 'GET'
            })
            const result = await res.json();
            setExtraProduct(result)
        }
        getProduct()
    }, [])

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            products: location.state,
            status: "unpaid",
            userId: (auth) ? JSON.parse(auth)._id : null,
            [e.target.id]: e.target.value
        })
    }

    // console.log(formData)
    const [selectedDate, setSelectedDate] = useState(new Date());

    const tileDisabled = ({ activeStartDate, date, view }) => {
        if (view === 'month' && (date.getDay() === 0 || date.getDay() === 6)) {
            return true;
        }

        return date < new Date();
    };
    const addToCartProduct = async () => {
        setLoading(true)
        const bodyparams = {
            ...formData,
            time: time,
            date: selectedDate,
            totalPrice: (total + (location.state[0].price * location.state[0].quantity) + calloutCharges + timeSlot()).toFixed(2),
            extras: selectedProducts,
        }

        const res = await fetch("http://localhost:8000/api/cart/add-to-cart", {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(bodyparams),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json();
        setLoading(false)
        if (result.statusCode === 404) {
            setError(result.message)
        } else {
            navigate('/book/product/product-detail/checkout')
        }
    }

    const updateQuantity = (productId, quantity) => {
        const updatedQuantities = {
            ...quantities,
            [productId]: quantity,
        };

        setQuantities(updatedQuantities);

        // Automatically add the product to the array when quantity is greater than 0
        const selected = extrasProduct
            .filter((product) => updatedQuantities[product._id] > 0)
            .map((product) => ({
                ...product,
                quantity: updatedQuantities[product._id],
                totalPrice: updatedQuantities[product._id] * product.price,
            }));

        setSelectedProducts(selected);
    };
    const total = selectedProducts.reduce((acc, product) => acc + product.totalPrice, 0);

    console.log(location.state)
    return (
        <section className="bookingpagesection center">
            <div className="bookingpagecontainer">
                <h2>Product Details</h2>
                <div className="bookingdetailscontainer flex">
                    <div className="leftbookingdetailsectioncontainer">

                        {
                                location.state.map((data, index) =>
                                    <div className="leftbookingdetailssection flex" key={index}>
                                        <div className="leftbookingdetailscontent" >
                                            <h2>{data.name}</h2>
                                            <p>{data.description}</p>
                                            <h3>£{data.price * data.quantity}</h3><span>inc. VAT</span>
                                            <p>Quantity: {data.quantity}</p>
                                            <h4>+{calloutCharges} callout charge</h4>
                                        </div>
                                        <div className="rightbookingdetailscontent">
                                            <img src={data.image} alt={data.name} />
                                        </div>
                                    </div>
                                ) 
                        }

                    </div>
                    <div className="Rightbookingdetailssection">
                        <h2>Collection Date & Time Slots</h2>
                        <div className="leftbookingdetailcontentcontainer flex">
                            <div className="leftbookingdetailscontent">
                                <div className="leftbookingdate">
                                    <label htmlFor="date">Select specific date:</label><br />
                                    <div className="calenderfield" style={{ textAlign: 'center', marginTop: 15, padding: '10px', borderRadius: 10, marginRight: 10, backgroundColor: '#6b66c3' }}>
                                        <Calendar
                                            onChange={setSelectedDate}
                                            value={selectedDate}
                                            tileDisabled={tileDisabled}
                                            showNavigation={true}
                                            calendarType="gregory"
                                            tileClassName={({ date, view }) =>
                                                view === 'month' && (date.getDay() === 0 || date.getDay() === 6)
                                                    ? 'disabled-day'
                                                    : 'custom-date'
                                            }
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="rightbookingdetailscontent">
                                <div className="bookingdateslot" style={{ backgroundColor: (time === "Free") ? '#fd70bc' : '#6b66c3' }} onClick={() => setTime("Free")}>
                                    <h2>Any Free</h2>
                                    <p>Free of cost</p>
                                </div>
                                <div className="bookingdateslot" style={{ backgroundColor: (time === "8am-1pm") ? '#fd70bc' : '#6b66c3' }} onClick={() => setTime("8am-1pm")}>
                                    <h2>Early (8am-1pm)</h2>
                                    <p>$10.00</p>
                                </div>
                                <div className="bookingdateslot" style={{ backgroundColor: (time === "After 12pm") ? '#fd70bc' : '#6b66c3' }} onClick={() => setTime("After 12pm")}>
                                    <h2>Afternoon (After 12pm)</h2>
                                    <p>$10.00</p>
                                </div>
                                <div className="bookingdateslot">
                                    <h2>Choose a two hour time slot</h2>
                                    <p>$25.00</p>
                                    <select id="time" onClick={(e) => setTime(e.target.value)} defaultValue={'Custom time'}>
                                        <option value={'Custom time'} disabled>Custom time</option>
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
                                    <input type="text" placeholder='First name' id='fname' onChange={handleFormData} /><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="lname">Last Name:</label><br />
                                    <input type="text" placeholder='Last Name' id='lname' onChange={handleFormData} />
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="email">Email:</label><br />
                                    <input type="email" placeholder='Email' id='email' onChange={handleFormData} /><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="phone">Phone number:</label><br />
                                    <input type="tel" placeholder='Phone number' id='phone' onChange={handleFormData} />
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="firstaddress">Address Line 1:</label><br />
                                    <input type="text" placeholder='Address line 1' id='firstAddress' onChange={handleFormData} /><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="secondaddress">Address Line 2:</label><br />
                                    <input type="text" placeholder='Address line 2' id='secondAddress' onChange={handleFormData} />
                                </div>
                            </div>
                            <div className="collectingformname flex">
                                <div className="leftcollectingformname">
                                    <label htmlFor="city">City:</label><br />
                                    <input type="text" placeholder='city' id='city' onChange={handleFormData} /><br />
                                </div>
                                <div className="rightcollectingformname">
                                    <label htmlFor="country">Country:</label><br />
                                    <input type="text" placeholder='country' id='country' onChange={handleFormData} />
                                </div>
                            </div>
                            <div className="postalcodeinput">
                                <label htmlFor="postcode">Postcode:</label><br />
                                <input type="text" placeholder='postcode' id='postcode' onChange={handleFormData} />
                            </div>
                            <div className="descriptioninput">
                                <label htmlFor="description">Waste Description:</label><br />
                                <textarea id="description" rows='5' placeholder='Enter Waste Description' onChange={handleFormData}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="rightcollectingdetailssection">
                        <div className="extrascontainer center">
                            <div className="leftextrascontainer">
                                {extrasProduct.map((product, key) =>
                                    <div className="leftextrascontainerbox flex" key={key}>
                                        <div className="leftextracontainerboxcontent">
                                            <img src={product.image} alt="img" />
                                        </div>
                                        <div className="middleextracontainerboxcontent">
                                            <h2>{product.name}</h2>
                                            <h3>€ {product.price}.00</h3>
                                        </div>
                                        <div className="righttextracontainerboxcontent flex">
                                            <button onClick={() => updateQuantity(product._id, Math.max((quantities[product._id] || 0) - 1, 0))}>-</button>
                                            <span>{quantities[product._id] || 0}</span>
                                            <button onClick={() => updateQuantity(product._id, (quantities[product._id] || 0) + 1)}>+</button>
                                        </div>
                                    </div>
                                )}

                            </div>
                            <div className="rightextrascontainer">
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
                            </div>

                        </div>
                    </div>

                </div>
                <div className="addtocartbutton">
                    <button onClick={addToCartProduct}>{(loading) ? "Loading..." : "Add to bucket"} (€ {(total + (location.state[0].price * location.state[0].quantity) + calloutCharges + timeSlot()).toFixed(2)})</button><br />
                    {error && <p style={{ color: 'cyan', fontSize: 14, marginTop: 10 }}>{error}</p>}
                </div>
            </div>
        </section>
    )
}

export default Booking