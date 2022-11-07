import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

class Navbar extends Component {
  state = {clicked: false};

  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render(){


    return (
      <nav>
        <div className="logo"><h2>Alt__<br/>School</h2></div>
        <div className="navbar-links">
        <ul id="navigation" className={this.state.clicked ? "#navigation active" : "navigation"} >
          <li>
            <NavLink to="/" className="nav-btn">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/repository/1" className="nav-btn">
              Repositories
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="mobile" onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    );
  }
  }

export default Navbar;
