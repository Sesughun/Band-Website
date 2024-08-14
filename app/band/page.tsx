import React from "react";
import Band from "./Band";

const Members = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/slide1.png')",
        width: "100%",
        // Adjust height as needed
        backgroundSize: "cover", // This ensures the image covers the entire div
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <br></br>
      <div
        className=" items-center justify-center bg-sky-400 z-10 m-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div>
          <h1 className="flex justify-center p-5 text-slate-50">
            LAN's MUSIC BAND
          </h1>
          <div className="flex flex-wrap gap-3">
            <Band
              picture="/Paul2.png"
              name="Paul Lan"
              nickname="Tertsea"
              details="The first born and the fun person in the band."
            />
            <Band
              picture="/Nath2.png"
              name="Nath Lan"
              nickname="Terhemba"
              details="The second born and the creative person in the band."
            />
            <Band
              picture="/Kater2.png"
              name="Joshua Lan"
              nickname="Kater"
              details="The first born and the active person in the band."
            />
            <Band
              picture="/daniel2.png"
              name="Daniel Lan"
              nickname="Daniel"
              details="The last born and baby of the band."
            />
            <br />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default Members;
