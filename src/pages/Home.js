import React, {useState, useEffect} from "react";
import axios from "axios";
import Profile from "../components/Profile";
import '../styles/Home.css'

function Home() {
    const [currentUsers, setCurrentUsers]= useState([])
  const [users]= useState("michaelokunoren")

  useEffect(()=>{
    const fetchRepos = async ()=>{
      const response = await axios.get(`https://api.github.com/users/${users}`)
      setCurrentUsers(response.data)
      console.log(response.data);
    
    }
    fetchRepos()
  },[users])
  return (
    <div className="home-profile">
      <h1>{users}'s Profile</h1>
      <div className="home-content">
      <Profile currentUsers={currentUsers}/>   
      </div>
    </div>
  );
}

export default Home;
