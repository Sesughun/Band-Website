"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Header = () => {
  const [homepage, setHomepage] = useState(true);

  const [audio, setAudio] = useState(false);

  const [video, setVideo] = useState(false);

  const [band, setBand] = useState(false);

  const [tours, setTours] = useState(false);

  const [gallery, setGallery] = useState(false);

  const handleHomeClick = () => {
    setHomepage(true);
    setAudio(false);
    setVideo(false);
    setBand(false);
    setTours(false);
    setGallery(false);
  };
  const handleAudioClick = () => {
    setHomepage(false);
    setAudio(true);
    setVideo(false);
    setBand(false);
    setTours(false);
    setGallery(false);
  };
  const handleVideoClick = () => {
    setHomepage(false);
    setAudio(false);
    setVideo(true);
    setBand(false);
    setTours(false);
    setGallery(false);
  };
  const handleBandClick = () => {
    setHomepage(false);
    setAudio(false);
    setVideo(false);
    setBand(true);
    setTours(false);
    setGallery(false);
  };
  const handleTourslick = () => {
    setHomepage(false);
    setAudio(false);
    setVideo(false);
    setBand(false);
    setTours(true);
    setGallery(false);
  };
  const handleGalleryClick = () => {
    setHomepage(false);
    setAudio(false);
    setVideo(false);
    setBand(false);
    setTours(false);
    setGallery(true);
  };
  return (
    <div className="bg-slate-950">
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a
            className="nav-link `{homepage? active}`"
            href="/"
            onClick={handleHomeClick}
          >
            HOME PAGE
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link text-slate-50"
            href="/albums"
            onClick={handleAudioClick}
          >
            AUDIO
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-slate-50"
            href="/video"
            onClick={handleVideoClick}
          >
            VIDEO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/band" onClick={handleBandClick}>
            BAND
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tours" onClick={handleTourslick}>
            TOURS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/gallery" onClick={handleGalleryClick}>
            GALLERY
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
