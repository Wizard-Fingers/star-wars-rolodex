import React from "react";

const Card = (props) => {
  const { name, email, id, username } = props;
  return (
    <div className="bg-green-400 dib br3 pa3 ma2 grow bw2 shadow-5">
      <div className="flex content-center justify-center">
        <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      </div>
      <div className="text-center">
        <h2 className="text-[2rem] font-bold">{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
