import React from "react";
interface Member {
  picture: string;
  name: string;
  nickname: string;
  details: string;
}
const Band = ({ picture, name, nickname, details }: Member) => {
  return (
    <div className="flex">
      <div>
        <img
          alt={name}
          src={picture}
          className="mx-[20px] rounded-xl"
          style={{
            maxWidth: "200px",
            maxHeight: "300px",
          }}
        />
      </div>
      <div className="text-slate-50 mr-2">
        <h2>{name}</h2>
        <h6 className="text-sm opacity-50">{nickname}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Band;
