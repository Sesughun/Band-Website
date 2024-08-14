"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
const Slideshow = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          >
            0
          </button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1">
            1
          </button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2">
            2
          </button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/slide1.png"
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%", maxHeight: "80%", border: "none" }}
            />
            <div className="carousel-caption">
              <h3>HOME</h3>
              <p>We've always had such FUN together!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/slide2.png"
              alt="Abuja"
              className="d-block"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>ABUJA</h3>
              <p>Thank you, Abuja!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/slide1.png"
              alt="Makurdi"
              className="d-block"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>MAKURDI</h3>
              <p>We love Makurdi!</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
