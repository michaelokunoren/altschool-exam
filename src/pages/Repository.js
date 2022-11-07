import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Repo from "../components/Repo";

function Repository() {
  const [items, setItems]= useState([])
  const [currentPage, setCurrentpage]= useState(1)
  const [users]= useState("michaelokunoren")
  const itemsPerPage = 2;
  const totalItemsFetched = items.length
  console.log(totalItemsFetched);

  useEffect(()=>{
    const fetchRepos = async ()=>{
      const response = await axios.get(`https://api.github.com/users/${users}/repos?per_page=${totalItemsFetched}`)
      setItems(response.data)
      console.log(response.data);
    
    }
    fetchRepos()
  },[users, totalItemsFetched])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem)

  const navigate = useNavigate()

  const handleNext = (event) => {
    event.preventDefault();
    const length = items.length;
    const count = length - 1;

    if (currentPage < count ){
      setCurrentpage(currentPage + 1);
      navigate(`/repository/${currentPage + 1}`)
    } 
  }
  const handlePrev = (event) => {
    event.preventDefault();
    
    if (currentPage > 0 ){
      setCurrentpage((prev) => prev - 1);
      navigate(`/repository/${currentPage - 1}`)
    } 

  }

  console.log(currentItem);
  return (
    <> <h1>Viewing {users} Repository</h1> 
    <Repo items={currentItem}/>
    <div className="Pagination">
      <button onClick={handlePrev} disabled= {currentPage === 1}>Prev</button>
      <button onClick={handleNext} disabled= {currentPage === Math.ceil(totalItemsFetched/itemsPerPage)}>Next</button>
    </div>
    
    </>
  );
}

export default Repository;
