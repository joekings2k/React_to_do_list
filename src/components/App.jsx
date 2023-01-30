import React, { useState } from "react";
import Heading from "./Heading";
import Items from "./Items";

function App() {
  const [inputText, setInputText] = useState();
  const [listItems, setListItems] = useState([]);

  const updateInput = (event) => {
    const item = event.target.value;
    setInputText(item);
  };

  function updateList(event) {
    setListItems((previousvals) => {
      return [...previousvals, inputText];
    });
    setInputText("");
    console.log(listItems);
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" onChange={updateInput} value={inputText} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item, i) => {
            return (<Items 
              key = {i}
              item ={item}
            />);
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
