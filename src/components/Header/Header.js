import React from "react";
import logo from '../../assets/img/branding/wave-logo.svg';

const Header = () => {
    return (
        <header id="header" className="sticky-top bsb-tpl-header-sticky bsb-tpl-header-sticky-animationX">
            <nav id="scrollspyNav" className="navbar navbar-expand-lg wave-bg-blue bsb-navbar bsb-navbar-hover bsb-navbar-caret bsb-tpl-navbar-sticky" data-bsb-sticky-target="#header">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    <img className="bsb-tpl-logo" src={logo} alt="Logo" />
          
                    </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul id="bsb-tpl-navbar" className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <a className="nav-link active" href="#scrollspyNav" aria-current="page" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyServices" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyPortfolio" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAbout" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyTeam" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyPricing" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyBlog" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
 
    );
};

export default Header;