import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import { Link, useNavigate } from 'react-router-dom';
import { Alert, LinearProgress } from '@mui/material'

const Profile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({})
    const [cartProducts, setCartProducts] = useState([])
    const [success, setSuccess] = useState(null)
    const [showMessage, setShowMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const storageData = localStorage.getItem("User")

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`http://localhost:8000/api/cart/get-cart-product/${JSON.parse(storageData)._id}`, {
                credentials: 'include',
                method: 'GET'
            })
            const result = await res.json();
            if (result) {
                setCartProducts(result);
            }
        }
        getUserData()
    }, [])

    const updateUser = async () => {
        setLoading(true)
        const res = await fetch(`http://localhost:8000/api/user/update-user/${JSON.parse(storageData)._id}`, {
            credentials: "include",
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await res.json();
        setLoading(false)
        if (result._id) {
            setShowMessage(true)
            setSuccess("Profile updated Successfully")
            localStorage.setItem("User", JSON.stringify(result))
        } else {
            setShowMessage(true)
            setShowMessage("Error updating the profile")
        }
    }


    const deleteUser = async () => {
        setLoading(true)
        const res = await fetch(`http://localhost:8000/api/user/delete-user/${JSON.parse(storageData)._id}`, {
            credentials: "include",
            method: "DELETE"
        })
        const result = await res.json();
        setLoading(false)
        if (result.status === 200) {
            localStorage.clear();
            navigate('/signup');
        }
        else {
            setShowMessage(true)
            setShowMessage("Cannot delete at the moment, please try later")
        }
    }

    const closeError = () => {
        setShowMessage(!showMessage);
        setSuccess(false)
    }

    const logoutUser=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <>
            <Header />
            {success && <Alert sx={{ position: (showMessage) ? 'absolute' : 'block', top: 40, right: 20, zIndex: 999, fontSize: 14 }} onClose={() => closeError()} severity='success'>{success}</Alert>}
            <section className="profilesection center">
                <div className="profilecontainer">
                    <div className="profilebox" style={{position:'relative'}}>
                        <i style={{position:'absolute',right:10,fontSize:25,color:'white',cursor:'pointer'}} onClick={logoutUser} className="bi bi-box-arrow-in-right"></i>
                        {loading && <LinearProgress color='secondary' sx={{ height: 6 }} />}
                        <div className="profileheader">
                            <h2>Your Profile</h2>
                            <p>Feel free to update your profile</p>
                        </div>
                        <div className="profilebody">
                            <div className="profileimg center">
                                <img src={JSON.parse(storageData).avatar} alt="user-img" />
                            </div>
                            <div className="profilecontent">
                                <label htmlFor="name">Name:</label><br />
                                <input type="text" placeholder='name' required onChange={handleFormData} defaultValue={JSON.parse(storageData).name} id='name' /><br />
                                <label htmlFor="email">Email:</label><br />
                                <input type="email" placeholder='email' required onChange={handleFormData} defaultValue={JSON.parse(storageData).email} id='email' /><br />
                                <label htmlFor="password">Password:</label><br />
                                <input type="password" placeholder='password' required onChange={handleFormData} id='password' /><br />
                            </div>
                        </div>
                        <div className="profilefooter">
                            <button onClick={updateUser}>Update</button>
                            <button onClick={deleteUser}>Delete</button>
                        </div>
                        <section className="profilepagecartsection">
                            <h2>Purchases you made:</h2>
                            {
                                (cartProducts.length > 0) ?
                                    cartProducts.map((product, index) =>
                                        <div className="profilepagecartbox flex" key={index}>
                                            {(product.status === "unpaid") ? <Link to={'/book/product/product-detail/checkout'}><span style={{ backgroundColor: 'red' }}>Pay now</span></Link> : <span>Paid</span>}
                                            <div className="leftprofilepagecartsection">
                                                {product.products.map((data, index) =>
                                                    (<img key={index} src={data.image} alt="img" />)
                                                )}
                                            </div>
                                            <div className="rightprofilepagecartsection">
                                                {product.products.map((data, key) => (<h2 key={key}>{data.name}</h2>))}
                                                <address>{product.firstAddress}, {product.city}, {product.country}</address>
                                                <p>Total price: €{product.totalPrice}</p>
                                            </div>
                                        </div>
                                    ) :
                                    <h2 style={{ fontSize: 18, color: '#fd70bc' }}>Anything you purchase will show here</h2>
                            }
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile