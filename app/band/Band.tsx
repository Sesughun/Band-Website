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
          style={{
            maxWidth: "200px",
            maxHeight: "300px",
            borderRadius: "25px",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        />
      </div>
      <div className="text-slate-50">
        <h2>{name}</h2>
        <h6>{nickname}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Band;
