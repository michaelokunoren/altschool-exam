import React from "react";
// import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import {format} from "date-fns";
import '../styles/Profile.css'

function Repo({items}) {
  console.log("your repos are:", items);
  return (
    <>
    { !items ? <div><p>Loading...</p></div> :
    <div>
        {items.map((item) => (
          <div className='repo-box' key={item.id}>
            <h3 className="repo-title">Repo Name: {item.name}</h3>
            <p className="date">Date Created: {format(new Date(item.created_at), "dd MMMM yyyy")} by {item.owner.login}</p>
            {item.private ? (<p className="private">Private</p>) : (<p className="public">Public</p>)}
            <div className="repo-button">
            <Link to={`/repositories/repository/${item.name}`} className='repo-btn'> View Repo</Link>
            </div>
            
            
          </div>
        ))}
    </div>
    }
    </>
  );
}

export default Repo;
