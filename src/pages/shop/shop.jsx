import React from 'react';
import{ITEMS} from "../../item";
import {Items} from "./items";

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='"shopTitle'>
        <h1> Vegetable Store</h1>
      </div>
      <div className='vegs'> 
        {ITEMS.map((items) => {
          <Items />
        })}
      </div>
    </div>
  );
};