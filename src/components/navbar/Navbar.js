import React, { useState } from "react";
import { Link  } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  
  const [activePage, setActivePage] = useState(window.location.pathname)
  const [collapse, setCollapse] = useState(false)

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0 custom-nav">
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-md-0 p-2" to="/" onClick={() => handlePageChange("/home")}>
            Title
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className={(activePage==="/home") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/" onClick={() => handlePageChange("/home")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/blog") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/blog" onClick={() => handlePageChange("/blog")}>Page 1</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/contact") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/contact" onClick={() => handlePageChange("/contact")}>Page 2</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      </div>
    </nav>

  );
}

export default Navbar;