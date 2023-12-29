import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-body-tertiary"
          style={{ marginLeft: "30px" }}
        >
          <div class="container">
            <button
              data-mdb-collapse-init
              class="navbar-toggler"
              type="button"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-brand mt-2 mt-lg-0" href="#"></a>

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    textFont="25px"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "black" }}>
                    Company
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "black" }}>
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            <div class="d-flex align-items-center">
              <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>

              <div class="dropdown">
                <a
                  data-mdb-dropdown-init
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <a
                  data-mdb-dropdown-init
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYuddHbv07SfYcJ9tPGqHj-RA2t7IPi3USQ&usqp=CAU"
                    class="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                    width="25"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <Table /> */}
      {/* <Accordian */}
    </div>
  );
};

export default Navbar;
