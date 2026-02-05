import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ setModal, cartCount }) => {
  return (
    <>
      <nav>
        <div className="container">
          <ul>
            
            <Link>Welcome</Link>
            <NavLink to={"/"}>Our Menu</NavLink>
            <NavLink to={"/productdetail"}>Product</NavLink>
            <Link>Contact</Link>
          </ul>
          <img src="/imgs/logo.png" alt="" />
          <div className="btns">
            <button className="shop">
              <FaCartShopping
                className="shopCard"
                onClick={() => {
                  setModal(true);
                }}
              />
              <span>{cartCount}</span>
            </button>
            <FiSearch />
            <button className="login">Become a Member</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
