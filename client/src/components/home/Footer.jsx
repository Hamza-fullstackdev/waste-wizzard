import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="footersection center">
        <div className="footercontainer flex">
            <div className="leftfootersection">
                <p>Removing rubbish</p>
                <h2>Its what we do</h2>
                <div className="footersocialicons flex">
                    <div className="sociallinks center"><Link><i className="bi bi-facebook"></i></Link></div>
                    <div className="sociallinks center"><Link><i className="bi bi-linkedin"></i></Link></div>
                    <div className="sociallinks center"><Link><i className="bi bi-instagram"></i></Link></div>
                    <div className="sociallinks center"><Link><i className="bi bi-twitter"></i></Link></div>
                </div>
            </div>
            <div className="rightfootersection flex">
                <div className="footerlinks">
                    <p>Core services</p>
                    <div className="links">
                        <Link>Rubbish removal</Link><br />
                        <Link>Sofa removal</Link><br />
                        <Link>Business waste</Link><br />
                        <Link>Skip bags</Link><br />
                        <Link>Furniture removal</Link><br />
                        <Link>Bin collection</Link><br />
                    </div>
                </div>
                <div className="footerlinks">
                    <p>Where we operate</p>
                    <div className="links">
                        <Link>Nation wide</Link><br />
                        <Link>London</Link><br />
                        <Link>Birmingham</Link><br />
                        <Link>Bristol</Link><br />
                        <Link>leeds</Link><br />
                    </div>
                </div>
                <div className="footerlinks">
                    <p>Useful links</p>
                    <div className="links">
                        <Link>About us</Link><br />
                        <Link>News</Link><br />
                        <Link>Reviws</Link><br />
                        <Link>Contact us</Link><br />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer className="endfooter center">
        <div className="endfootercontainer">
            <h2>Waste wizzard</h2>
            <p>© Clearabee 2023. All rights reserved. Clearabee is a trading name of Clearabee Limited.</p>
            <p>Company Reg: 07938514 VAT Reg: 141 0827 45 Waste Carrier Licence: CBDU61392</p>
        </div>
    </footer>
    </>
  )
}

export default Footer