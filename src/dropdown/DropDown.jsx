import React, { useState } from "react";
import "./select.css";

const Select = ({ title, options, onChange, valueSelect }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(valueSelect);

  return (
    <div className="containerSelect">
      <div className="select" onClick={() => setActive(!active)}>
        <h3
          className={`labelSelect ${
            (active || !!value) && "labelSelectActive"
          }`}
        >
          {title}
        </h3>
        <h3> {value} </h3>
        <span class="material-symbols-outlined">
          {!active ? "keyboard_arrow_down" : "expand_less"}
        </span>
      </div>
      <div className={active ? "option" : "optionHidden"}>
        {options.map((item, index) => (
          <div
            key={index}
            className="value"
            onClick={() => {
              setValue(item);
              setActive(false);
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
