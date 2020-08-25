import React from "react";
import CounterComponent from "./CounterComponent";

const ButtonComponent = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.handleClick}>ClickMe!</button>
      <CounterComponent counter={props.counter} divValue={props.returnValue} />
    </div>
  );
};

export default ButtonComponent;
