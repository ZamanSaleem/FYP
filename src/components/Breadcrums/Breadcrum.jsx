import React from 'react';
import './Breadcrum.css';
import arrow_icon from "../../assets/breadcrum_arrow.png";

export const Breadcrum = (props) => {
  const { product = {} } = props; // Default to empty object if product is undefined

  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
      {product.category || 'Unknown Category'} <img src={arrow_icon} alt="" /> 
      {product.name || 'Unknown Product'}
    </div>
  );
};

export default Breadcrum;

