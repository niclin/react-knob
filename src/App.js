import React, { Component } from "react";
import InternalInput from "./components/InternalInput";

class App extends Component {
  state = {
    uncontrolledValue: 0,
  };

  normalizeAngle(angle) {
    const maxAngel = 240;

    if (angle < 0) {
      //E.g -1 turns 359
      return angle + maxAngel;
    } else if (angle > maxAngel) {
      return angle - maxAngel;
    }
    return angle;
  }

  onFormControlChange(newVal) {
    this.setState({ ...this.state, uncontrolledValue: newVal });
  }

  render() {
    return (
      <div className="App">
        <img src="https://i.imgur.com/y5ivHlz.png" />

        <InternalInput
          value={this.state.uncontrolledValue}
          min={0}
          max={1}
          step={0.1}
          onChange={this.onFormControlChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
