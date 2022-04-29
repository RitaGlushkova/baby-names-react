import React from "react";

function BabyName({ babyName, handleClick }) {
  const { name, sex } = babyName;
  return (
    <li style = {{maxWidth: '120px', borderRadius: '5px'}}
      onClick={() => handleClick(babyName)}
      className={sex === "m" ? "col greenBox" : "col orangeBox"}
      value={name}
    >
      {name}
    </li>
  );
}

export default BabyName;