import React from "react";

/**
 * lesson :
 * Functional components does not need this as the reference is with in the scope.
 * no Need to add () method while calling from jsx.
 *
 */
export default function Events() {
  function handleclick() {
    console.log("just logging at the moment");
  }
  return (
    <div style={{ display: "inline-block" }}>
      <h3>Functional Event Handler</h3>
      <span>Click on this</span>
      <button onClick={handleclick}>click</button>
    </div>
  );
}
