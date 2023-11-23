import React, { useState } from 'react'
import { app } from "./firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
const Oauth = () => {
  const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const signInWithGoogle = async () => {
       try {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, provider);
    
        const api= await fetch("http://localhost:8000/api/route/google",{
          credentials:'include',
            method:"POST",
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,avatar:result.user.photoURL}),
            headers:{"Content-Type":"application/json"}
        })
        const apiResult=await api.json();
        if(apiResult._id){
          setLoading(false)
            localStorage.setItem("User",JSON.stringify(apiResult))
            navigate("/");
        }
        else{
            alert("SignIn failed")
            setLoading(false)
        }
       } catch (error) {
        setLoading(false)
        alert(error)
       }
      };
    
  return (
    <>
         <button onClick={signInWithGoogle} id='googlebtn'>{(loading)?<CircularProgress sx={{color:"white"}} size={18}/>:"Continue with google"}</button>
    </>
  )
}

export default Oauth