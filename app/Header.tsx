import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Header = () => {
  return (
    <div className="bg-slate-950">
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            HOME PAGE
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-slate-50" href="/music">
            AUDIO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-slate-50" href="/video">
            VIDEO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/band">
            BAND
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tours">
            TOURS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tours">
            PRACTICE
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
