import React from "react";
import BabyName from "./Babyname";

function NamesContainer({ names, handleClick }) {
  return (
    <ul className="row row-cols-10">
      {names.map((nameObject) => (
        <BabyName
          babyName={nameObject}
          key={nameObject.id}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}
export default NamesContainer;