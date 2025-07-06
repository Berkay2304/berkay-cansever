import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Form gönderildikten sonra alanları temizle
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

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
        <form
            className="contact-form"
            action="https://formspree.io/f/mdkzvyla"
            method="POST"
            onSubmit={handleSubmit}
        >
        <input
            name="name"
            type="text"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleInputChange}
        />

        <input
            name="email"
            type="email"
            placeholder="E-Mail*"
            required
            value={formData.email}
            onChange={handleInputChange}
        />

        <textarea
            name="message"
            rows="5"
            placeholder="Message*"
            required
            value={formData.message}
            onChange={handleInputChange}
        />

        <input type="text" name="_gotcha" style={{ display: 'none' }} />

  
        <input type="hidden" name="_subject" value="Portfolyo sitesinden mesaj" />
        <input type="hidden" name="_redirect" value="https://seninsite.com/#contact" />

        <input
            className="submit"
            type="submit"
            value="SEND"
        />
        </form>
    </div>
  );
}
