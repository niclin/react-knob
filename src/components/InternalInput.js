import React from "react";

const InternalInput = ({ min, max, value, step, onChange }) => {

  const onValChange = (event) => {
    onChange(Number(event.target.value));
  }

  return (
    <input
      step={step}
      value={value}
      onChange={onValChange}
      type="range"
      min={min}
      max={max}
    />
  );
};

export default InternalInput;
