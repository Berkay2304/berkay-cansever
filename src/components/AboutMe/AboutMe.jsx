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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien 
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
          Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
          Pellentesque commodo lacus at sodales sodales</p>
          <br />
        <p>Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet 
          augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </p>
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
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
        </div>
        <div className='develop box'>
          <h1>Developing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
        </div>
        <div className='maintenance box'>
          <h1>Maintenance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
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
