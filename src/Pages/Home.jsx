import React,{useEffect} from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/Logn";

function Home() {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
        navigate('/')
    }
  },[])
  function logout() {
    dispatch(logOut());
    navigate("/login");
  }
  return (
    <div className="main-body">
      <div className="topbar">
        <div
          onClick={logout}
          className="logout"
          style={{
            marginLeft: "20px",
            fontFamily: "serif",
            fontSize: "20px",
            color: "white",
          }}
        >
          log out
        </div>
      </div>
      <div className="home-container">
        <h1>User Details</h1>
        <div className="user-card">
          <h2 className="user-name">{user?.name}</h2>
          <p className="user-email">Email:{user?.email}</p>
          <p className="user-password">Password: {user?.password}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
