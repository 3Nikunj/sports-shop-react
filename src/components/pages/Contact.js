import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions about our products or services? Reach out to us and we'll get back to you as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Sports Avenue</p>
                <p>Athletic City, AC 12345</p>
              </div>
              
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@sportshop.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Hours</h3>
                <p>Monday - Friday: 9am - 8pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: 12pm - 5pm</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {formSubmitted ? (
              <div className="form-success">
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
        
        <div className="map-container">
          <h2>Find Us</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;