import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {LinearProgress} from '@mui/material'
const ProductDetail = () => {
    const [getData,setGetData]=useState([]);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const fetchProducts= async()=>{
            setLoading(true)
            const res=await fetch("http://localhost:8000/api/product/get-products/rubbish-clearance",{
                credentials:'include',
                method:'GET'
            })
            const result= await res.json();
            if(result){
                setLoading(false)
                setGetData(result)
            }
        }
        fetchProducts()
    },[])
    return (
        <>
            <div className="productpagedetailsection center">
                <div className="productpagedetailcontainer">
                    <div className="productpagedetailcontainerheader">
                        <p style={{textTransform:'Uppercase',fontSize:16,color:'white'}}>Man & Vans collection</p>
                        <h2>Choose your size</h2>
                        <h3>Book the bare minimum. You can pay for more rubbish removal on the day.</h3>
                        <p >Price includes £59.99 call out fee £30 per y³ / 0.76m³ per y³ / 0.76m³.</p>
                    </div>
                    <div className="productpagedetailcontainerbody flex">
                        {loading && <LinearProgress color="primary" size='sm' sx={{width:'100%',height:6}}/>}
                       {
                        (getData && getData.length>0)?
                        getData.map((data,index)=>
                        
                            <div className="productpagedetailbox" key={index}>
                            <div className="productpagedetailboxheader center">
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div className="productpagedetailboxbody">
                                <h2>{data.name}</h2>
                                <h3>£{data.price} Inc VAT</h3>
                                <p>{data.description}</p>
                            </div>
                            <div className="productpagedetailboxfooter center">
                                <button><Link to='/product-detail' state={{data:data,quantity:1}} style={{color:'white'}}>Book now</Link></button>
                            </div>
                        </div>
                           
                        ):
                        <h2>No Products to show</h2>
                       }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail