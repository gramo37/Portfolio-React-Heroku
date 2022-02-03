import React, { useState, useEffect } from "react";

const SkillItem = (props) => {
  const [fillColor, setfillColor] = useState("");

  useEffect(() => {
    if (props.proficiency <= 20) {
      setfillColor("rgb(160 255 176)");
      return;
    } else if (props.proficiency <= 40) {
      setfillColor("#558c3f");
      return;
    } else if (props.proficiency <= 60) {
      setfillColor("#faeb38");
      return;
    } else if (props.proficiency <= 80) {
      setfillColor("#ff6161");
      return;
    } else if (props.proficiency <= 100) {
      setfillColor("rgb(0 102 255)");
      return;
    }
  }, []);

  const options = {
    width: `${props.proficiency}%`,
    backgroundColor: fillColor,
  };

  return (
    <div>
      <span>{props.skillName}</span>

      <div className="skillItem" style={{ backgroundColor: props.backColor }}>
        <div className="t25" style={options}></div>
      </div>
    </div>
  );
};

export default SkillItem;
