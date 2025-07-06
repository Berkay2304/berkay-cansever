import React from 'react';

export default function AboutMe() {
  return (
    <div className='about'>
      <div className='top'>
        <div className='heading'>
          <hr />
          <h1>ABOUT ME</h1>
          <hr style={{marginTop:"-4px"}}/>
        </div>
        <p>Hi, I'm Berkay. I'm a second-year Computer Engineering student. 
          I constantly improve myself by learning new things in various fields. 
          I enjoy turning what I learn into real-world projects, 
          which helps me gain experience and build my portfolio. 
          Lately, I've been focusing on full-stack web development and started building my own websites. 
          I'm currently working with both frontend and backend technologies.</p>
          <br />
      </div>
      <div>
          <button>MORE</button>
          <div className='sep'> 
            <hr />
            <span></span>
            <hr />
          </div>
      </div>
      <div className='bottom'>
        <div className='design box'>
          <h1>Design</h1>
          <p>I create clean and user-friendly designs that combine aesthetics with functionality.</p>
        </div>
        <div className='develop box'>
          <h1>Developing</h1>
          <p>I develop modern and responsive web applications using up-to-date technologies.</p>
        </div>
        <div className='maintenance box'>
          <h1>Maintenance</h1>
          <p>I ensure the long-term performance and security of the websites I build through regular maintenance.</p>
        </div>
      </div>
        <div className='sep'> 
            <hr />
            <span></span>
            <hr />
        </div>
    </div>
  );
}
