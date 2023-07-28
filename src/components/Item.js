import React from "react";
import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState()
  const liStyle = inCart ?  "in-cart" : "";
  const buttonColor  = inCart ? "add" : "remove";

function handleAddClick(){
  setCart(!inCart)
}
  return (
    <li className="">
       <li className={liStyle}></li>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className={buttonColor} onClick={handleAddClick}>{inCart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
