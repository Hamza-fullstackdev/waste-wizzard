import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const auth = localStorage.getItem("User");
    const [openHeader,setOpenHeader]= useState(false);
    const [openNavbar,setOpenNavbar]=useState(false);

    const showHeader=()=>{
        setOpenHeader(true);
        setOpenNavbar(true)
    }
    const closeNavbar=()=>{
        setOpenHeader(false)
        setOpenNavbar(false)
    }
    return (
        <header className="header center">
            <div className="headercontainer flex">
                <div className="logo">
                    <Link to={'/'}><h2>Waste Wizzard</h2></Link>
                </div>
                <nav className="navbar" style={{display: (openHeader)?"block":"flex", left:(openNavbar)?"0px":"-250px"}}>
                    {
                        (auth) ?
                            <ul className="navbar-links flex">
                                <li className="navbar-link"><a href="#">Services <i className="bi bi-arrow-down-short"></i></a> </li>
                                <li className="navbar-link"><a href="#">Waste Calculator</a></li>
                                <li className="navbar-link"><a href="#">Beeloyal</a></li>
                                <li className="navbar-link"><a href="#">Get a Quote</a></li>
                                <li className="navbar-link"><button><Link to={'/book'}>Book</Link></button></li>
                                <li className="navbar-link"><Link to={"/profile"}><i className="bi bi-person-fill"></i></Link></li>
                                <i id="closebtn" onClick={closeNavbar} className="bi bi-x"></i>
                            </ul>
                            :
                            <ul className="navbar-links flex">
                                <li className="navbar-link"><a href="#">Services <i className="bi bi-arrow-down-short"></i></a> </li>
                                <li className="navbar-link"><a href="#">Waste Calculator</a></li>
                                <li className="navbar-link"><a href="#">Beeloyal</a></li>
                                <li className="navbar-link"><a href="#">Get a Quote</a></li>
                                <li className="navbar-link"><button><Link to={'/signup'}>Signup</Link></button></li>
                                <i id="closebtn" onClick={closeNavbar} className="bi bi-x"></i>
                            </ul>
                    }

                </nav>
                <div className="hamberger-menu">
                    <i onClick={showHeader} className="bi bi-list"></i>
                </div>
            </div>
        </header>
    )
}

export default Header