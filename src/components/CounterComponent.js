import React from "react";

function CounterComponent(props) {
  return (
    <div>
      {props.divValue}
      {props.counter}
    </div>
  );
}

export default CounterComponent;
