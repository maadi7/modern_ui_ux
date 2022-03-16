import React from 'react';
import './vr.css'
import vr from '../../assets/possibility.png'
const Vr = () => {
  return (
    <div className="vr section__margin">
      <div className="vr-img">
        <img src={vr} alt="vr" />
      </div>
      <div className="vr-container">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  )
}

export default Vr
