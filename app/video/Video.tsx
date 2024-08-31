import Link from "next/link";
import React from "react";
interface VideoInfo {
  video_url: string;
  title: string;
  description: string;
  band_members: string[];
  image: string;
}

const Videos = ({
  video_url,
  title,
  description,
  band_members,
  image,
}: VideoInfo) => {
  return (
    <div
      className="bg-slate-900 border-slate-700 mb-4 text-slate-50"
      style={{ borderRadius: 25 }}
    >
      <Link href={video_url}>
        <div className="flex p-4">
          <img
            alt={title}
            src={image}
            style={{
              maxWidth: "350px",
              maxHeight: "200px",
              borderRadius: "25px",
              marginRight: "20px",
            }}
          />
          <div>
            <h3>{title}</h3>
            <p className="opacity-40">{band_members.map((member) => member)}</p>
            <p className="opacity-70">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Videos;
