import React from 'react';
import './future.css';
import Stylefuture from '../../containers/stylefuture/Stylefuture';


const Future = () => {
  return (
    <div className="future__main" id="ai">
       <div className="future__main-heading section__margin">
         <h1 className='gradient-text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
         <p>Request Early Access to Get Started</p>
       </div>
       <div className="future__main-text section__margin">
         <Stylefuture title="Improving end distrusts instantly " text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />
         <Stylefuture title="Become the tended active" text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
         <Stylefuture title="Message or am nothing" text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
         <Stylefuture title="Really boy law county" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>
       </div>
    </div>
  )
}

export default Future
