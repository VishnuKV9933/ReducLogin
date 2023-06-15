import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState(null);
  const { user } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user) {
      generateMessage("Email is not registered");
      return;
    }

    if (data.email !== user.email) {
      generateMessage("Incorrect email");
      return;
    }
    if (data.password !== user.password) {
      generateMessage("Incorrect Password");
      return
    }
    navigate("/home");
  };
  function generateMessage(message) {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  return (
    <div className="body">
      <div className="login-container">
        <h2>Login Page</h2>
        <p style={{ color: "red" }}>{message}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="password">Email:</label>
            <input
              type="email"
              id="password"
              name="password"
              placeholder="Enter your password"
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
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
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
          <button
            className="submit-btn"
            style={{ backgroundColor: " rgb(130, 130, 221)" }}
            type="submit"
          >
            Login
          </button>
          <Link to="/">
            <p>Register?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
