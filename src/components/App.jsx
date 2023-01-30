import React, { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Items from "./Items";

function App() {
  
  const [listItems, setListItems] = useState([]);

  function updateList(inputText) {
    setListItems((previousvals) => {
      return [...previousvals, inputText];
    });
    console.log(listItems);
  }

  const deleteItem = (id) => {
    setListItems((previousItems)=>{
      return previousItems.filter((item,index)=>{
        return index !== id
      })
    })
  };

  return (
    <div className="container">
      <Heading />
      <Input 
      updateList= {updateList} />
      <div>
        <ul>
          {listItems.map((item, i) => {
            return <Items key={i} id={i} item={item} onChecked={deleteItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
