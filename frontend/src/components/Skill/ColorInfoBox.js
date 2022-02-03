import React from "react";

const ColorInfoBox = (props) => {
  return (
    <>
      <div className="skillcolors">
        <div className="colorBox" style={{backgroundColor: props.boxColor}}></div>
        <div className="colortext">{props.boxText}</div>
      </div>
    </>
  );
};

export default ColorInfoBox;
