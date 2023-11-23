import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <section className="aboutsection center">
        <div className="aboutcontainer">
            <div className="aboutdata center">
                <div className="aboutcontent">
                    <p>What we do</p>
                    <h2>Our core rubbish removal services</h2>
                    <div className="aboutbuttons">
                        <a href="#">Domestic customer</a>
                        <a href="#">Commercial customer</a>
                    </div>
                </div>
            </div>
            <div className="productcontainer flex">
                <div className="productcard">
                    <span>Sameday collection</span>
                    <Link to={'/rubbish-clearance'}>
                        <div className="productimg">
                            <img src="./images/truck.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Man & Van</h2>
                            <p>from £89.99</p>
                        </div>
                    </Link>
                </div>
                <div className="productcard">
                    <a href="#">
                        <div className="productimg">
                            <img src="./images/hire.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Skip Hire</h2>
                            <p>Get a price</p>
                        </div>
                    </a>
                </div>
                <div className="productcard">
                    <span>Available in 3 sizes</span>
                    <Link to={'/skip-bags'}>
                        <div className="productimg">
                            <img src="./images/Skip-bag.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Skip Bags</h2>
                            <p>from £159.99</p>
                        </div>
                    </Link>
                </div>
                <div className="productcard">
                    <span>Sameday collection</span>
                    <a href="#">
                        <div className="productimg">
                            <img src="./images/Reclining-corner-sofa.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Sofa Removal</h2>
                            <p>from £69.99</p>
                        </div>
                    </a>
                </div>
                <div className="productcard">
                    <span>Next-day collection</span>
                    <a href="#">
                        <div className="productimg">
                            <img src="./images/Bin-collection.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Private Bin Collection</h2>
                            <p>from £34.99</p>
                        </div>
                    </a>
                </div>
                <div className="productcard">
                    <span>New Service</span>
                    <a href="#">
                        <div className="productimg">
                            <img src="./images/Furniture-removal-e1678198444758.webp" alt="delivery"/>
                        </div>
                        <div className="productdesc">
                            <h2>Furniture Collection</h2>
                            <p>from £67.99</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product