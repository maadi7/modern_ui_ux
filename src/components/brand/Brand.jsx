import React from 'react';
import './brand.css';
import atlas from '../../assets/atlassian.png';
import drop from '../../assets/dropbox.png';
import google from '../../assets/google.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';



const Brand = () => {
  return (
    <div className='brand section__padding'>
        <div>
           <img src={google} alt="google" />
        </div>
        <div>
           <img src={slack} alt="google" />
        </div>
        <div>
           <img src={atlas} alt="google" />
        </div>
        <div>
           <img src={drop} alt="google" />
        </div>
        <div>
           <img src={shopify} alt="google" />
        </div>
    </div>
  )
}

export default Brand
