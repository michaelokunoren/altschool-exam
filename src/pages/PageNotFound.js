import React from "react";
import {Link} from "react-router-dom"

function PageNotFound() {
  return (
    <div>
      <h1>Oops! we couldnt find the page you're looking for</h1>
      <Link to='/' className="btn">back to home</Link>
    </div>
  );
}

export default PageNotFound;
