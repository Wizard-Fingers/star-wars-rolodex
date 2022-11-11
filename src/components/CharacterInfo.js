import React from "react";
import Card from "./Card";
// import { characters } from "./Characters";

const CharacterInfo = ({ characters }) => {
  const cardComponent = characters.map((user, i) => {
    return (
      <Card
        key={characters[i].id}
        id={characters[i].id}
        name={characters[i].name}
        username={characters[i].username}
        email={characters[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CharacterInfo;
