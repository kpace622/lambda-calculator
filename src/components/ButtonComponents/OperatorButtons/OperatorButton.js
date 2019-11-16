import React from "react";

const OperatorButton = props => {
  return (
    <button className="buttons operator-buttons">
      <span>
        {props.button.char}
      </span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton
