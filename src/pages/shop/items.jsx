import React from 'react'

export const Items = (props) => {
  const{id, itemNames, price, itemImg } = props.data;
  return (
    <div className='vegetables'>
      <img src={itemImg} />
      <div className='name'>
        <p> <b>{ itemNames}</b> </p>
        <p> ${price}/kg</p>
      </div>
    </div>
  );
};