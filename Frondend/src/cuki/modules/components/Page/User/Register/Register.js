import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Register.css'

export default function SignUp() {
    const navigate = useNavigate();

    const[formData, setFormData] = useState( 
        { 
            id: "", 
            username : "",  
            email : "", 
            password : "" 
        } 
    ) 
 
    const handleChange = (event) => {  
    const { name, value } = event.target;  
    setFormData((prevState) => ({  
        ...prevState,  
        [name]: value,  
    }));  
  };  
  
    const handleSubmit = async (event) => {  
    event.preventDefault();  
  
    // Kirim nilai form ke komponen  
    console.log(formData);  
    try {  
        const response = await fetch('http://localhost:3001/registrasi', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(formData),  
        });  
        const jsonData = await response.json();  
        console.log(jsonData);
        
        if (response.ok){
            console.log('Register created successfully');
            
            navigate('/home')
        } else {
            console.log('Error creating acount. Status:', response.status);
        }
        } catch (error) {  
            console.log('Error sending request:', error);  
        }  
    };

    return (
    <div className='akun'>
      <div className='akun-user'>

        <h1 className='signup'>
            Create Your Account
        </h1>

    <br/>
        <form className='isi' onSubmitCapture={handleSubmit} key={formData.id}>
            <div className="form-group">
                <label 
                for="exampleInputUsername1">
                Username
                </label>
                <input type="username" 
                className="form-control ctrl" 
                id="exampleInputUsername1" 
                placeholder="Enter username" 
                name='username'
                value={formData.username}
                onChange={handleChange}
                />
            </div>
    
    <br/>
            <div className="form-group">
                <label 
                for="exampleInputEmail1">
                    Email
                </label>
                <input 
                type="email" 
                className="form-control ctrl" 
                id="exampleInputEmail1"
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
            </div>
        
    <br/>    
            <div className="form-group">
                <label 
                for="exampleInputPassword1">
                    Password
                </label>
                <input 
                type="password" 
                className="form-control ctrl" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                name='password'
                value={formData.password}
                onChange={handleChange}
                />
            </div>

    <br/>   
            <div className='pindah'>
            <h6 className='gak-punya'>
                Have an account?
                <Link to={"/login"}>
                <button type="masuk"
                className="btn smk">
                    Sign In
                </button>
                </Link>
            </h6>
            </div> 

        <br/>
            <button type="submit" 
            className="btn btn-primary sbmt">
                Sign Up
            </button>

        </form>
        </div>
    </div>
  )
}