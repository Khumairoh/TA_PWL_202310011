import React from "react";
import { NavLink } from "react-router-dom";
import './HeaderNav.css'

export default function HeaderNav() {
  const menuList = [
    { id: 1, name: "Home", path: "/home"},
    { id: 2, name: "Menu & Resep", path: "/menuresep" },
    { id: 3, name: "Form Resep", path: "/formresep" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Login", path: "/login" },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top shadow bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
           <h2 style={{ marginLeft: '58px', marginTop : '50%' }} className='cuki'>Cuki</h2> 
            <img className="uki"
              src={require('../../../assets/media/icons/image-removebg-preview 2.png')}
              alt="cuki-logo"
              style={{ height: "40px" }}
            />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {menuList.map((v, index) => (
                    <li className="nav-item me-1" key={index}>
                      <NavLink
                        className="nav-link text-hover-success px-3"
                        to={v.path}
                      >
                        <i className={"bi me-2 fs-5 text-dark " + v.icon}></i>
                        {v.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
