import React from "react";
import "./date.scss";
const Date = () => {
  return (
    <div className="contentDate">
      <input className="inputDate" type="date" required placeholder="sss"/>
      <label className="label">Star date</label>
    </div>
  );
};

export default Date;
