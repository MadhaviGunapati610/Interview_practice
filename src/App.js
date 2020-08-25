import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

export default function App() {
  let [state, setState] = useState("");
  let [count, setCount] = useState(10);

  function handleChange(e) {
    e.preventDefault();
    setState(e.target.value);
    //console.log(e.target.value)
  }
  function handleClick(e) {
    e.preventDefault();
    //let x = e.target.value;
    let ele = document.createElement("div");
    ele.innerHTML = state;
    console.log(ele);
    document.body.appendChild(ele);
    setCount(count + 1);
  }

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleChange} />
      <ButtonComponent
        handleClick={handleClick}
        returnValue={state}
        count={count}
      />
    </div>
  );
}
