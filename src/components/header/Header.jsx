import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header__main">
        <h1 className="header__main-heading gradient-text">Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p className="header__main-text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header__main-email">
          <input type="text" placeholder="Your Email Address" />
          <button className="header__main-btn">Get Started</button>
        </div>
        <div className="header__main-people">
          <img src={people} alt="people" />
          <p className="header__main-people_text">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>  
      <div className="header__img">
          <img src={ai} alt="AI" />  
      </div> 
    </div>
  )
}

export default Header;