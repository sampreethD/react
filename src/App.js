import React from "react";
import "./styles.css";

//lesson no.1 - Function name should start with caps if you are using as a component
//lesson no.2 - default is for some reason, don't ignore. (default) is stating we are exporting single class/function.
//lesson no.3 - jsx expression must have one parent element hence div tag.
//lesson no.4 - class components will have props property by default from React.component.Can be accessed by this.
export default function App(props) {
  function add(a, b) {
    return a + b;
  }
  return (
    <div>
      <h1>Sum of 2 numbers</h1>
      <h2>{add(1, 4)}</h2>
    </div>
  );
}
