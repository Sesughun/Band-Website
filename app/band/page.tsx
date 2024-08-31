import React from "react";
import Band from "./Band";

const Members = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/slide1.png')",
        width: "100%",
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
            LAN&apos;s MUSIC BAND
          </h1>
          <div className="flex flex-wrap gap-2">
            <Band
              picture="/Paul2.png"
              name="Paul Lan"
              nickname="Tertsea"
              details="The first born and the fun person in the band. He plays the drums."
            />
            <Band
              picture="/Nath2.png"
              name="Nath Lan"
              nickname="Terhemba"
              details="The second born and the creative person in the band. He plays the keyboard and saxophone."
            />
            <Band
              picture="/Kater2.png"
              name="Joshua Lan"
              nickname="Kater"
              details="The third born and the active person in the band. He plays the guitar."
            />
            <Band
              picture="/daniel2.png"
              name="Daniel Lan"
              nickname="Daniel"
              details="The last born and bold person in the band. He plays the saxophone."
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
