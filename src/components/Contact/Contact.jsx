import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='heading'>
            <hr />
            <h1>CONTACT</h1>
            <hr />
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.</p>
        </div>
        <div className='sep'>
            <hr />
            <span></span>
            <hr />
        </div>
        <form className="contact-form" action="">
            <input placeholder="Name*" type="text" />
            <input placeholder="E-Mail*" type="email" />
            <input className= "messageBox" placeholder="Message*" type="" />
            <input className="submit" type="submit" value='SEND'/>
        </form>
    </div>
  );
}
