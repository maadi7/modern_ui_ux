import React from 'react';
import './wgpt3.css';
import Feature  from '../../containers/feature/Feature.jsx'

const Wgpt3 = () => {
  return (
    <div className="wgpt3 section__margin" id='gpt3'>
        <div className="wgpt3-feature section__padding">
          <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
        </div>
        <div className="wgpt3-heading section__padding">
          <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="wgpt3-container section__padding">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard on thought. " />
        <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
        </div>
    </div>
  )
}

export default Wgpt3