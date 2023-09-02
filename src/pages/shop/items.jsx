import React from 'react';
import {ShopContext} from '../../context/shop-context'
import { useContext } from 'react';

export const Vegs = (props) => {
  const{vid, vName, vPrice, vImg } = props.data;
  const{addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems [vid]

  return (
    <div className='vegetables'>
      <img src={vImg} />
      <div className='name'>
        <p> <b>{ vName}</b> </p>
        <p> ${vPrice}/kg</p>
      </div>
      <button className='addCart' onClick={() => addToCart(vid)}> 
        Add To Cart {cartItemAmount => 0 && <> (cartItemAmount) </>}
      </button>
    </div>
  );
};

export const Fruits = (props) => {
  const{fid, fName, fPrice, fImg } = props.data;
  return (
    <div className='fruits'>
      <img src={fImg} />
      <div className='name'>
        <p> <b>{ fName}</b> </p>
        <p> ${fPrice}/kg</p>
      </div>
      <button className='addCart'> Add To Cart </button>
    </div>
  );
};

export const NonVeg = (props) => {
  const{nid, nName, nPrice, nImg } = props.data;
  return (
    <div className='non-veg'>
      <img src={nImg} />
      <div className='name'>
        <p> <b>{ nName}</b> </p>
        <p> ${nPrice}/kg</p>
      </div>
      <button className='addCart'> Add To Cart </button>
    </div>
  );
};

export const Dairy = (props) => {
  const{did, dName, dPrice, dImg } = props.data;
  return (
    <div className='dairy'>
      <img src={dImg} />
      <div className='name'>
        <p> <b>{ dName}</b> </p>
        <p> ${dPrice}/kg</p>
      </div>
      <button className='addCart'> Add To Cart </button>
    </div>
  );
};