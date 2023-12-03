import { LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductBody = () => {
    const [getData, setGetData] = useState({})
    const [loading, setLoading] = useState(false)
    const [quantities, setQuantities] = useState({});
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:8000/api/product/get-products/sofa-removal", {
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

    console.log(selectedProducts)
    const updateQuantity = (productId, quantity) => {
        const updatedQuantities = {
            ...quantities,
            [productId]: quantity,
        };
        setQuantities(updatedQuantities);
        const selected = getData
            .filter((product) => updatedQuantities[product._id] > 0)
            .map((product) => ({
                ...product,
                quantity: updatedQuantities[product._id],
                totalPrice: updatedQuantities[product._id] * product.price,
            }));

        setSelectedProducts(selected);
    };
    return (
        <section className="sofaremovalsection center">
            <div className="sofaremovalcontainer">
                <div className="sofaremovalcontainerheader">
                    <p style={{ textTransform: 'Uppercase', fontSize: 16, color: 'white' }}>Sofa removal</p>
                    <h2>Armchairs, sofas, sofa beds and footstools available for collection</h2>
                </div>
                <div className="sofaremovalcontainerbody flex">
                    {loading && <LinearProgress color="primary" size='sm' sx={{ width: '100%', height: 6 }} />}
                    {
                        (getData && getData.length > 0) ?
                        getData.map((data, index) =>
                            <div className="sofaremovalcontainerbox" key={index}>
                                <div className="sofaremovalcontainerboxheader">
                                    <img src={data.image} alt={data.name} />
                                </div>
                                <div className="sofaremovalcontainerboxbody">
                                    <h2>{data.name}</h2>
                                    <p>£{data.price}.00 inc. VAT</p>
                                </div>
                                <div className="sofaremovalcontainerboxactions center">
                                    <div className="sofaremovalcontainerbuttons flex">
                                        <button onClick={() => updateQuantity(data._id, Math.max((quantities[data._id] || 0) - 1, 0))}>-</button>
                                        <span>{quantities[data._id] || 0}</span>
                                        <button onClick={() => updateQuantity(data._id, (quantities[data._id] || 0) + 1)}>+</button>
                                    </div>
                                </div>
                                <div className="sofaremovalbooknowbtn">
                            <Link to={'/book/product/product-detail'} state={[selectedProducts]}><button>Book Now</button></Link>
                </div>
                            </div>
                        ):<h1>No Data</h1>
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductBody