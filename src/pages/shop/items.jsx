import React from 'react'

export const Vegs = (props) => {
  const{vid, vName, vPrice, vImg } = props.data;
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

export const Fruits = (props) => {
  const{vid, vName, vPrice, vImg } = props.data;
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

export const NonVeg = (props) => {
  const{vid, vName, vPrice, vImg } = props.data;
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

export const Dairy = (props) => {
  const{vid, vName, vPrice, vImg } = props.data;
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