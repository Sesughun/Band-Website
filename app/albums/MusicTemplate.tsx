"use client";
import React, { useState } from "react";
interface MusicTemplate {
  songTitle: string;
  band_members: string[];
}

const MusicTemplate = ({ songTitle, band_members }: MusicTemplate) => {
  const [play, setPlay] = useState(true);
  return (
    <div
      className="bg-slate-800 flex justify-between text-sky-50 mx-4 mb-2 px-3 py-2"
      style={{ borderRadius: "10px" }}
    >
      <div className="flex">
        {play ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <h5 className="ml-2">{songTitle}</h5>
      </div>

      <p className="text-slate-50/30">
        {band_members.map((member: any, index: number) => (
          <span>
            {member}
            {index < band_members.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MusicTemplate;
