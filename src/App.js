import React, { useState } from "react";
import InternalInput from "./components/InternalInput";

const App = () => {
  const maxAngel = 240;

  const [step, setStep] = useState(0.1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const [value, setValue] = useState(0);

  const onFormControlChange = (newVal) => {
    setValue(newVal)
  }

  const convertValueToAngle = (value) => {
    return value * maxAngel;
  }

  const style = {
    transform: `rotate(${convertValueToAngle(value)}deg)`,
    transition: "transform 0.1s linear",
  };

  return (
    <div className="App">
      <img style={style} src="https://i.imgur.com/y5ivHlz.png" />

      <InternalInput
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onFormControlChange}
      />
    </div>
  )
}

export default App;
