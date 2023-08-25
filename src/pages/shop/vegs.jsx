import React from 'react'

export const Vegs = (props) => {
  const{id, vName, vPrice, vImg } = props.data;
  return (
    <div className='vegetables'>
      <img src={vImg} />
      <div className='name'>
        <p> <b>{ vName}</b> </p>
        <p> ${vPrice}/kg</p>
      </div>
    </div>
  );
};