import React, { Component } from "react";
import logo from "..//images/nav-logo.png";
import { FaAlignCenter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "./Title";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  navToggler = () => {
    let { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    let { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {" "}
            <Title title="Palacio Patisserie" />
            <Link to="/" className="nav-logo">
              <img src={logo} alt="logo official" />
            </Link>
            <button onClick={this.navToggler} type="button" className="nav-btn">
              <FaAlignCenter className="nav-icon" />
            </button>
          </div>
          <div className="nav-footer">
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Chocolate</Link>
              </li>
              <li>
                <Link to="/">Cake</Link>
              </li>
              <li>
                <Link to="/">Tables</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
