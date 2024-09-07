"use client";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import Image from "next/image";
const Slideshow = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
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
            <Image
              src="/slide1.png"
              alt="Los Angeles"
              className="d-block"
              width={500}
              height={50}
              style={{ width: "100%", maxHeight: "80%", border: "none" }}
            />
            <div className="carousel-caption">
              <h3>HOME</h3>
              <p> We&apos;ve always had such FUN together!</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="/slide22.png"
              alt="Abuja"
              className="d-block"
              width={500}
              height={300}
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>ABUJA</h3>
              <p>Thank you, Abuja!</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="/slide3.png"
              alt="Makurdi"
              className="d-block"
              width={500}
              height={300}
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
          <span className="carousel-control-prev-icon">.</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon">.</span>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
