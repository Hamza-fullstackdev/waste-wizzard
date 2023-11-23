import React, { useRef, useState } from 'react'
import Header from '../components/home/Header'
import { useNavigate } from 'react-router-dom';
import {Alert,LinearProgress} from '@mui/material'

const Profile = () => {
    const navigate= useNavigate();
    const [formData,setFormData]= useState({})
    const [success,setSuccess]= useState(null)
    const [showMessage,setShowMessage]=useState(false)
    const [loading,setLoading]= useState(false)
    const storageData=localStorage.getItem("User")

    const handleFormData=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    

    const updateUser=async()=>{
        setLoading(true)
        const res= await fetch(`http://localhost:8000/api/user/update-user/${JSON.parse(storageData)._id}`,{
            credentials:"include",
            method:'POST',
            body: JSON.stringify(formData),
            headers:{
               "Content-Type": "application/json"
            }
        })
        const result= await res.json();
        setLoading(false)
        if(result._id){
            setShowMessage(true)
            setSuccess("Profile updated Successfully")
            localStorage.setItem("User",JSON.stringify(result))
        }else{
            setShowMessage(true)
            setShowMessage("Error updating the profile")
        }
    }
    

    const deleteUser= async()=>{
        setLoading(true)
        const res= await fetch(`http://localhost:8000/api/user/delete-user/${JSON.parse(storageData)._id}`,{
            credentials:"include",
            method:"DELETE"
        })
        const result=await res.json();
        setLoading(false)
        if(result.status===200){
            localStorage.clear();
            navigate('/signup');
        }
        else{
            setShowMessage(true)
            setShowMessage("Cannot delete at the moment, please try later")
        }
    }

    const closeError=()=>{
        setShowMessage(!showMessage);
        setSuccess(false)
    }

    return (
        <>
            <Header />
            {success && <Alert sx={{position:(showMessage)?'absolute':'block',top:20,right:20,zIndex:999,fontSize:14}} onClose={()=>closeError()} severity='success'>{success}</Alert>}
            <section className="profilesection center">
                <div className="profilecontainer">
                    <div className="profilebox">
                    {loading && <LinearProgress color='secondary' sx={{height:6}}/>}
                        <div className="profileheader">
                            <h2>Your Profile</h2>
                            <p>Feel free to update your profile</p>
                        </div>
                        <div className="profilebody">
                            <div className="profileimg center">
                                <img src={JSON.parse(storageData).avatar} alt="user-img"/>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile