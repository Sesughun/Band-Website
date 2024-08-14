import React from "react";
import Slideshow from "./Slideshow";
import TourDates from "./TourDates";
import LatestVideo from "./LatestVideo";

const HomePage = () => {
  return (
    <div className="bg-slate-950">
      <div>
        <Slideshow />
      </div>
      <div className="flex p-3 gap-5">
        <div>
          <TourDates />
        </div>
        <div className="justify-end">
          <LatestVideo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
