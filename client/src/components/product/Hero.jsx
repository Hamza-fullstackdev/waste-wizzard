import React from 'react'
import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <section className="productpagesection center">
        <div className="productpagecontainer">
            <p><Link style={{color:'black'}} to={'/'}>Home</Link> / {props.link}</p>
            <div className="productpagecontent flex">
                <div className="leftproductpagesection">
                    <h3>{props.subTitle}</h3>
                    <h1>{props.title}</h1>
                    <h4>{props.description}</h4>
                    <p>{props.subDescription}</p>
                    <div className="productpagepricetag">
                        <p>{props.priceTag}</p>
                        <h2>£{props.price}</h2>
                    </div>
                    <div className="productpagebutton">
                        <button>Book Now</button>
                    </div>
                </div>
                <div className="rightproductpagesection">
                    <img src={props.imgUrl} alt="Hero image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero