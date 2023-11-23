import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Alert,LinearProgress} from '@mui/material'
import Oauth from '../firebase/Oauth'

const Login = () => {
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
        const res= await fetch("http://localhost:8000/api/route/login",{
            credentials:'include',
            method:"POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result= await res.json();
        console.log(result)
        if(result._id){
            localStorage.setItem("User",JSON.stringify(result));
            navigate("/")
        }
        else{
            setError(result.message)
            setShowErrorMessage(true)
            setLoading(false);
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
                    <h2>Login</h2>
                    <p>Enter your credentials</p>
                </div>
                <div className="signupbody">
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Email' id='email' onChange={getFormData} required/><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='password' id='password' onChange={getFormData} required/><br />
                </div>
                <div className="signupfooter">
                    <button onClick={signupUser}>Login</button>
                   <Oauth/>
                    <small>Dont have a account? <Link to={'/signup'}>Signup now</Link></small>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login