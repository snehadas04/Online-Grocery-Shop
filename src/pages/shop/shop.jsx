import React from 'react';
import{VEG} from "../../veg";
import {Vegs} from "./items";
import {FRUIT} from '../../fruit';
import {Fruits} from "./items"
import {NONVEG} from '../../nonveg';
import {NonVeg} from "./items"
import {Dairy} from "./items"


export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1> Vegetables Store</h1>
      </div>
      <div className='veges'> 
        {VEG.map((item) => (
          <Vegs data={item}/>
        ))}
      </div>

      <div className='shopTitle'>
        <h1> Fruits Store</h1>
      </div>
      <div className='frts'> 
        {FRUIT.map((item) => (
          <Fruits data={item}/>
        ))}
      </div>

      <div className='"shopTitle'>
        <h1> Non-Veg Store</h1>
      </div>
      <div className='nvg'> 
        {NONVEG.map((item) => (
          <NonVeg data={item}/>
        ))}
      </div>

      <div className='"shopTitle'>
        <h1> Dairy Store</h1>
      </div>
      <div className='dairy'> 
        {VEG.map((item) => (
          <Dairy data={item}/>
        ))}
      </div>
    </div>
  );
};