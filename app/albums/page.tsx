import React from "react";
import MusicTemplate from "./MusicTemplate";

const page = () => {
  return (
    <div className="bg-slate-950 h-screen">
      <h1 className="text-slate-50 p-2">ALBUMS</h1>
      <div className="flex flex-wrap"></div>
      <MusicTemplate
        songTitle="You Raise Me Up-REPRISE"
        band_members={["Daniel"]}
      />
      <MusicTemplate songTitle="Eze-Ebube" band_members={["Paul"]} />
      <MusicTemplate
        songTitle="The God Who Can Never Fail"
        band_members={["Paul", "Kater", "Daniel"]}
      />
      <MusicTemplate
        songTitle="Jesus LOVES me"
        band_members={["Nath", "Daniel"]}
      />
    </div>
  );
};

export default page;
