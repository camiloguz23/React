import React from "react";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="miniSpinner spinner1"></div>
      <div className="miniSpinner spinner2"></div>
      <div className="miniSpinner spinner3"></div>
      <div className="miniSpinner spinner4"></div>
      <div className="miniSpinner spinner5"></div>
    </div>
  );
};

export default Spinner;
