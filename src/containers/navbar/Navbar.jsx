import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
// import ForwardIcon from '@material-ui/icons/Forward';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
      <div className="navbar section__padding">
        <div className="navbar-logo"> 
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
         <p><a href="#home">Home</a></p>
         <p><a href="#gpt3">What is GPT?</a></p>
         <p><a href="#ai">Open AI</a></p>
         <p><a href="#case">Case Studies</a></p>
         <p><a href="#library">Library</a></p>
        </div>
        <div className="navbar-btn">
          <button className="navbar-btn-in">Sign in</button>
          <button className="navbar-btn-up">Sign up</button>
        </div>
        <div className="navbar__smallscreen"> 
          {toggle? <MenuIcon className="icon" style={{ color:"white", fontSize:35 }}fontSize='70px' onClick={() => setToggle(false)}/>: 
          <MenuIcon className='icons' fontSize='30px' style={{ color:"white", fontSize:35 }} onClick={() => setToggle(true)}/> }
          {toggle && 
          <div className="navbar__smallscreen-menu scale-up-center">
            <div className="navbar__smallscreen-links" onClick={() => setToggle(false)}>
               <p><a href="#home">Home</a></p>
               <p><a href="#gpt3">What is GPT?</a></p>
               <p><a href="#ai">Open AI</a></p>
               <p><a href="#case">Case Studies</a></p>
               <p><a href="#library">Library</a></p>
           </div>
           <div className="navbar__smallscreen-btn">
              <button className="navbar-btn-in">Sign in</button>
              <button className="navbar-btn-up">Sign up</button>
        </div>
        </div>
        }
        
      </div>
      </div>
      
  )
}

export default Navbar