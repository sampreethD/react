import React from "react";
import "./styles.css";

//lesson no.1 - Function name should start with caps if you are using as a component
export default function App(props) {
  return (
    <div className="App">
      <h1>Hello React - Use of props in functional component</h1>
      <h2>This is props : {props.property}, passed to this function</h2>
    </div>
  );
}
