import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState();

  const updateInput = (event) => {
    const item = event.target.value;
    setInputText(item);
  };
  return (
    <div className="form">
      <input type="text" onChange={updateInput} value={inputText} />
      <button
        onClick={() => {
          props.updateList(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default Input;
