import React from 'react';
import './blogui.css';

const Blogui = (  { imgUrl, head, date } ) => {
  return (
    <div className="blogui">
      <div className="blogui-img">
         <img src={imgUrl} alt="blog.img" />
      </div>
      <div className="blogui-text">
        <div className="blogui-text-sec1">
          <p>{date}</p>
          <h3>{head}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Blogui