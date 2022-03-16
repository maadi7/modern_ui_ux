import React from 'react';
import './stylefuture.css';

const Stylefuture = ({ title, text }) => {
  return (
    <>
    <div className="future">
      <div className="future-heading">
        <div/>
        <h3>{title}</h3>
      </div> 
      <div className="future-text">
        <p>{text}</p>
      </div>
    </div>
    </>
  )
}

export default Stylefuture