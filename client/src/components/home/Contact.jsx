import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contactsection center">
        <div className="contactcontainer flex">
            <div className="leftcontactsection">
              <h2>Need help or got a question?</h2>
              <p>Begin a live chat with one of our helpful team.</p>
            </div>
            <div className="rightcontactsection">
              <button><Link to={'/contact'}>Contact us</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Contact