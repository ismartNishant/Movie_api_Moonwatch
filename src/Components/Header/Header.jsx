import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark  fixed-top " data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MoonWatch <i className='bx bx-movie-play bx-tada' ></i>
        </Link>
        <Link className="navbar-brand" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};
