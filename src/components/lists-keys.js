import React from "react";

/**
 * lesson 1:
 * lists can be used within jsx or outside jsx.
 * list element li must have a key(string) and must be unique with respect to its siblings.
 */
export default function List() {
  const list = ["😅", "🤦‍♂️", "🙈", "😍"];
  const list2 = ["😝", "😅", "😌", "😉"];
  const loop = list.map((ele) => {
    return ele;
  });
  return (
    <div>
      <h1>Lists</h1>
      <hr />
      <span style={{ userSelect: "none" }}>{loop}</span>
      <ul>
        {list2.map((ele, index) => {
          return <li key={index.toString()}>{ele}</li>;
        })}
      </ul>
    </div>
  );
}
