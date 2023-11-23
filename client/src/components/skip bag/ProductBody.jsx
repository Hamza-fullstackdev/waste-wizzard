import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {LinearProgress} from '@mui/material'

const ProductBody = () => {
    const [getData, setGetData] = useState({})
    const [productQuantity, setProductQuantity] = useState(0)
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:8000/api/product/get-products/skip-bags", {
                credentials: 'include',
                method: 'GET'
            })
            const result = await res.json();
            if (result) {
                setLoading(false)
                setGetData(result)
            }
        }
        fetchProducts()
    }, [])

    const handleIncrement = (productId) => {
        setProductQuantity((prevQuantities) => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1,
        }));
    };

    const handleDecrement = (productId) => {
        setProductQuantity((prevQuantities) => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
        }));
    }

    const handleInputChange = (productId, value) => {
        setProductQuantity((prevQuantities) => ({
          ...prevQuantities,
          [productId]: value,
        }));
      };

    return (
        <section className="skipbagsection center">
            <div className="skipbagcontainer">
                <div className="skipbagcontainerheader">
                    <p style={{ textTransform: 'Uppercase', fontSize: 16, color: 'white' }}>Skip bags</p>
                    <h2>Order your skip bags in three easy steps</h2>
                    <h3>Not sure if a Skip Bag is right for the job you’re doing?</h3>
                    <p>See how our services compare. Click the comparison button under your desired skip bag size to compare services.</p>
                </div>
                <div className="skipbagcontainerbody flex">
                {loading && <LinearProgress color="primary" size='sm' sx={{width:'100%',height:6}}/>}
                    {
                        (getData && getData.length > 0) ?
                            getData.map((product, index) =>
                                <div className="skipbagbox" key={index}>
                                    <div className="skipbagboxheader">
                                        <img src={product.image} alt="img" />
                                    </div>
                                    <div className="skipbagboxbody">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <h3>Not suitable for heavy or dense waste such as bricks, rubble or soil</h3>
                                    </div>
                                    <div className="skipbagboxfooter">
                                        <h3>Price</h3>
                                        <p>€{product.price}</p>
                                        <div className="skipbagboxactions center">
                                            <div className="skipbagboxbutton flex">
                                                <div className="decrementbutton" onClick={() => handleDecrement(product._id)}>
                                                    <h2>-</h2>
                                                </div>
                                                <input type="tel" value={productQuantity[product._id] || 0} readOnly onChange={(e) => handleInputChange(product._id, e.target.value)}/>
                                                <div className="decrementbutton" onClick={() => handleIncrement(product._id)}>
                                                    <h2>+</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={'/product-detail'} state={{data:product,quantity:productQuantity[product._id]}}><button>Book Now</button></Link>
                                    </div>
                                </div>
                            ) :
                            <h2>Error occure while fetching products</h2>
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductBody