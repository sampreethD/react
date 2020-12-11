import React from "react";

export default function ConditionRender(props) {
  const user = props.userRole;
  return (
    <div>
      <h4>Functional component</h4>
      <hr />
      <h3>Conditional rendering</h3>
      {user === "admin" ? (
        <span>Admin : {props.name}</span>
      ) : (
        <span>Guest : {props.name}</span>
      )}
    </div>
  );
}
