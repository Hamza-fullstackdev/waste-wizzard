import React, { useState } from 'react';
import {CircularProgress, LinearProgress} from '@mui/material'

const Hero = () => {
  const [ formData, setFormData ] = useState([])
  const [loading, setLoading]= useState(false);
  const [error,setError] = useState(null)
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const sendMessage=async()=>{
    setLoading(true)
    const res= await fetch("http://localhost:8000/api/contact/send-message",{
      credentials:'include',
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const result= await res.json();
    setLoading(false)
    console.log(result)
    if(result.status===200){
      setError(result.message)
    }
    else{
      setError(result.message)
    }
  }
  return (
    <section className="contactpagesection center">
      <div className="flex contactpagecontainer">
        <div className="leftcontactpagesection">
          <p>Home/Contact</p>
          <div className="leftcontactpagecontent">
          <h2>Need Some help</h2>
            <h1>Contact us</h1>
            <h3>Whether you need help with a quote, need to pay for a service or just have a general question, we have customer service which is available 7 days a week.</h3>
            <p>As well as live chat we provide a call back service, at a time to suit you.</p>
            <p>Alternatively, we can call you back almost immediately, if you want to speak right away without having to waste time in a call queue.</p>
            <button>Book</button>
          </div>
        </div>
        <div className="rightcontactpagesection center">
          <div className="contactformbox">
            <div className="contactformheader">
              <h2>Message us</h2>
            </div>
            <div className="contactformbody">
              <label htmlFor="fname">First Name:</label><br />
              <input type="text" required id='fname' placeholder='First name' onChange={handleFormData} /><br />
              <label htmlFor="lname">Last Name:</label><br />
              <input type="text" required id='lname' placeholder='Last name' onChange={handleFormData} /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" required id='email' placeholder='email' onChange={handleFormData} /><br />
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="tel" required id='phone' placeholder='Phone number' onChange={handleFormData} /><br />
              <label htmlFor="service">Services:</label><br />
              <select id="service" onChange={handleFormData} required>
                <option value="Man & Van">Man & Van</option>
                <option value="Skip Bag">Skip Bag</option>
                <option value="Domestic Bins">Domestic Bins</option>
                <option value="Other">Other</option>
              </select><br />
              <label htmlFor="message">Your Message:</label><br />
              <textarea id="message" rows="5" onChange={handleFormData} required></textarea>
            </div>
            <div className="contactformfooter center" style={{marginBottom:10}}>
              <button onClick={sendMessage}>{(loading)?"Sending....":"Send message"}</button>
            </div>
            {error && <span style={{color:'cyan',fontSize:14,marginTop:10}}>{error}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero