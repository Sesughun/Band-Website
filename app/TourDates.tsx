"use client";
import React from "react";

const TourDates = () => {
  return (
    <div>
      <h3 className="text-slate-50 align-center">TOUR DATES</h3>
      <div className="flex gap-4 text-slate-50 mb-2">
        <div>
          <div
            className="p-3"
            style={{
              backgroundColor: "rgb(71, 85, 105)",
              border: "3px solid rgb(71, 85, 105)",
              borderRadius: "45%",
            }}
          >
            <div className="text-xs align-middle text-slate-300 mb-0 pb-0">
              SUN 09
            </div>
            <div className="text-lg">SEPT 24</div>
          </div>
        </div>

        <div>
          <h5>MAKURDI</h5>
          At DUNAMIS Makurdi Central, Makurdi, NIGERIA.
        </div>
      </div>
      <hr className="text-slate-50"></hr>
      <div className="flex gap-4 text-slate-50">
        <div>
          <div
            className="p-3"
            style={{
              backgroundColor: "rgb(71, 85, 105)",
              border: "3px solid rgb(71, 85, 105)",
              borderRadius: "45%",
            }}
          >
            <div className="text-xs align-middle text-slate-300 mb-0 pb-0">
              SAT 14
            </div>
            <div className="text-lg">DEC. 24</div>
          </div>
        </div>

        <div>
          <h5>ABUJA</h5>
          At the Glory Dome, Abuja, NIGERIA.
        </div>
      </div>
    </div>
  );
};

export default TourDates;
