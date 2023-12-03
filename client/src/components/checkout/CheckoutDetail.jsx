import React, { useEffect, useState } from 'react'

const CheckoutDetail = () => {
    const [products, setProducts] = useState([])
    const auth = localStorage.getItem("User")
    useEffect(() => {
        const getCartData = async () => {
            const res = await fetch(`http://localhost:8000/api/cart/get-cart-product/${JSON.parse(auth)._id}`, {
                credentials: 'include',
                method: 'GET'
            })
            const result = await res.json();
            console.log(result)
            setProducts(result)
        }
        getCartData();
        const intervalId = setInterval(getCartData, 3000);
        return () => clearInterval(intervalId);
    }, [])

    const handeDeleteProduct = async (product) => {
        console.log(product)
        const res = await fetch(`http://localhost:8000/api/cart/delete-product/${product}`, {
            credentials: 'include',
            method: 'DELETE'
        })
        const result = await res.json();
    }

    const totalSum = products.reduce((acc, obj) => acc + obj.totalPrice, 0);
    return (
        <section className="checkoutpagesection center">
            <div className="checkoutpagecontainer">
                <h2>Checkout Page</h2>
                <div className="checkoutpagecontent">
                    {
                        (products.length > 0) ?
                            products.map((product, index) =>
                                <div className="checkoutpagecontentcontainer" key={index}>
                                    <div className="checkoutpagebox flex">
                                        <div className="leftcheckoutpagebox">
                                            {product.products.map((data, key) =>
                                            (
                                                <img key={key} src={data.image} alt="img" />
                                            )
                                            )}
                                        </div>
                                        <div className="rightcheckoutpagebox">
                                            <div className="rightcheckoutpageboxcontent">
                                                {product.products.map((data, key) =>
                                                (
                                                    <h2 key={key}>{data.name}</h2>
                                                )
                                                )}

                                                <address>{product.firstAddress}, {product.city}, {product.country}</address>
                                                {product.products.map((data, key) =>
                                                <p key={key}>Quantity: {data.quantity}</p>
                                                )}
                                                
                                                
                                                {product.products.map((data, key) =>
                                                (
                                                    <p key={key}>Unit price: €{data.price}</p>
                                                )
                                                )}
                                                <p>Date selected: {product.date.slice(0,10)} at {product.time}</p>

                                                <h3>Total Price: €{product.totalPrice}</h3>

                                                <div className="checkoutactions">
                                                    <button onClick={() => handeDeleteProduct(product._id)}>Delete from Cart</button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="rightcheckoutpageextrassection">
                                        <h2>Extras Added:</h2>

                                    {
                                        (product.extras.length)?
                                        product.extras.map((data,index)=>
                                        
                                        <div className="rightcheckoutpageextrasbox flex" key={index}>
                                            <div className="leftcheckoutpageextrasboxsection">
                                                <img src={data.image} alt="product-img" />
                                            </div>
                                            <div className="middlecheckoutpageextrasboxsection">
                                                <h2>{data.name}</h2>
                                                <p>Quantity: {data.quantity}</p>
                                            </div>
                                            <div className="rightcheckoutpageextrasboxsection">
                                                <p>Price: €{data.totalPrice}</p>
                                            </div>
                                        </div>
                                    
                                        ):
                                        <h2 style={{color: '#6b66c3'}}>No extras added</h2>
                                    }
                                    </div>
                                </div>
                            ) :
                            <h1>Nothing in a cart</h1>
                    }

                    <button>Confirm Order (€ {totalSum.toFixed(2)})</button>
                </div>
            </div>
        </section>
    )
}

export default CheckoutDetail