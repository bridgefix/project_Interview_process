import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nabarr = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && (
        <nav
          className="navbar navbar-expand-lg  navbar-light bg-body-tertiary"
          style={{ paddingTop: "0" ,position: "fixed",
          width:"100%",zIndex:"2"}}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#477DAD",
              height: "80px",
              color: "white",
            }}
          >
            <button
              data-mdb-collapse-
              className="navbar-toggler"
              type="button"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand mt-2 mt-lg-0" href="#"></a>

              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0  "
                style={{ fontSize: "20px" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/dashbroad"
                    style={{ color: "white" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/interview/id`}
                    style={{ color: "white" }}
                  >
                    Interview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/company"
                    style={{ color: "white" }}
                  >
                    Company
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/technology"
                    style={{ color: "white" }}
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/questions/id`}
                    style={{ color: "white" }}
                  >
                    Questions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                {/* <i className="fas fa-shopping-cart"></i> */}
              </a>

              {/* <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}

              <div>
                <a
                  // data-mdb-dropdown-init
                  // className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  // href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  {/* <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                    color="white"
                    style={{backgroundColor:"white",color:"white"}}
                  /> */}
                  <AccountCircleIcon />

                  {/* <h6 style={{ color: "white" ,paddingRight:"8px",marginTop:"5px"}}>Test</h6> */}
                  {/* <Logout /> */}
                </a>
                {/* <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#" style={{color:"black"}}>
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul> */}
              </div>
              <Logout />
              <div></div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nabarr;
