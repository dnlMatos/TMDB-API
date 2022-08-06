import React, { useRef, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/tmdb.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Link
            to="/"
            className="d-flex align-items-center fs-2 col-lg-4"
          >
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <span>TMDB Movies</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-lg-8 justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav d-flex gap-4">
              {headerNav.map((e, i) => (
                <li key={i} className={`nav-item text-center`}>
                  <a className={`${i === active ? "active" : ""}`}>
                    <Link to={e.pathd}>{e.display}</Link>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
