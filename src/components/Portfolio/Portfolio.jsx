import React from 'react';
import sample from "../../assets/images/sample.png";

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='heading'>
        <hr />
        <h1>PORTFOLIO</h1>
        <hr />
      </div>
      <div className='samples-container'>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        <div>
          <a href="#"><img src={sample} alt="Sample Web Site" /></a>
        </div>
        
      </div>
    </div>
  );
}
