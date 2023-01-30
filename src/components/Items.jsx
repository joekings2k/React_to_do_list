import React from "react";


function Items (props){

 return (
   <div onClick={()=>{
    props.onChecked(props.id);
   }}>
     <li>{props.item}</li>
   </div>
 ); 
}

export default Items