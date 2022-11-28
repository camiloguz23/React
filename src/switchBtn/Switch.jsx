import React from "react";
import "./checbox.css";

const Switch = () => {
  return (
    <div className="containerSwitch">
      <input className="checkbox" type="checkbox" id="checkbox" onChange={(e) => console.log(e.target.checked)} />
      <label className="labelSwitch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;
