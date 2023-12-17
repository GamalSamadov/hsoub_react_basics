import React from "react";


function Text(props) {
  // Destructuring Assignment
  const {text= "Hsoub Academy", children} = props;
  return (
    <div>
      <p>{ text }</p>
      <div>{ children }</div>
    </div>
  );
}

export default Text;


