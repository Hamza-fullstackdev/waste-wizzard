import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Alert, LinearProgress} from '@mui/material'
import Oauth from '../firebase/Oauth'
const Signup = () => {
    const [formData,setFormData]= useState([])
    const [error,setError]= useState(null)
    const [showErrorMessage,setShowErrorMessage]=useState(false)
    const [loading,setLoading]= useState(false)
    const navigate=useNavigate();
    const getFormData=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }
    
    const signupUser= async()=>{
        setLoading(true);
        const res= await fetch("http://localhost:8000/api/route/signup",{
            credentials:'include',
            method:"POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result= await res.json();
        if(result.status===200){
            navigate("/login");
        }
        else{
            setError(result.message)
            setShowErrorMessage(true)
            setLoading(false)
        }
    }

    const closeError=()=>{
        setError(false)
        setShowErrorMessage(!showErrorMessage)
    }
  return (
    <>
    {error && <Alert sx={{position:(showErrorMessage)?'absolute':'block',top:20,right:20,zIndex:999,fontSize:14}} onClose={()=>closeError()} severity='error'>{error}</Alert>}
    <section className="signupsection center">
        <div className="signupcontainer">
            <div className="signupbox">
            {loading && <LinearProgress color='secondary' sx={{height:6}}/>}
                <img src="./images/sideimg.png" alt="img" />
                <div className="signupheader">
                    <h2>Signup</h2>
                    <p>Signup to explore waste-wizzard</p>
                </div>
                <div className="signupbody">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" placeholder='Full name' id='name' required onChange={getFormData}/><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Email' id='email' required onChange={getFormData}/><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='password' id='password' required onChange={getFormData}/><br />
                </div>
                <div className="signupfooter">
                    <button onClick={signupUser}>Signup</button>
                    <Oauth/>
                    <small>Already have a account? <Link to={'/login'}>Login now</Link></small>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup