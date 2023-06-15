import React from 'react'
import './Register.css'
import { useForm } from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom'
import {registeration} from '../Redux/Logn'
import { useDispatch } from 'react-redux';

export default function Register() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    const onSubmit = async (data) => {
        console.log("dubmit",data);
        dispatch(registeration(data))
        navigate('/login')
    }


  return (
    <div className='body'>
   
    <div className="login-container">
        <h2>Register</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
            type="text" id="username" name="username" placeholder="Enter your username" 
            {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name should be at-least 3 characters.",
                },
              })}
            />
             {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Email:</label>
            <input  
              id="password" name="email" placeholder="Enter your email" 
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
             />
                {errors.email && errors.email.type === "required" && (
                <p style={{ color: "red" }}>Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p style={{ color: "red" }}>Email is not valid.</p>
              )}

          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
             type="password" id="password" name="password" placeholder="Enter your password" 
             {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password should be at-least  characters.",
                },
              })}
             />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
          </div>
          <button type='submit'  className="submit-btn">Register</button>
          <Link to="/login">
          <p>Login?</p>
          </Link>
        </form>
      </div>
    </div>
  )
}
