import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="portfolio-container min-h-screen">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">
            <span className="gradient-text">Portfolio.</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="pt-5 mt-5">
        <Outlet />
      </div>
    </div>
  );
}
