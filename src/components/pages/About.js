import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About SportShop</h1>
        
        <section className="about-intro">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, SportShop began with a simple mission: to provide high-quality sports equipment 
              to athletes of all levels. What started as a small local store has grown into a trusted 
              retailer serving customers nationwide.
            </p>
            <p>
              Our passion for sports drives everything we do. We believe that everyone deserves access to 
              quality equipment that enhances their performance and enjoyment of their favorite activities.
            </p>
          </div>
        </section>
        
        <section className="our-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We source only the best products from trusted manufacturers to ensure our customers receive durable, high-performing equipment.</p>
            </div>
            <div className="value-card">
              <h3>Expertise</h3>
              <p>Our team consists of sports enthusiasts and former athletes who understand the needs of our customers and can provide knowledgeable advice.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We actively support local sports teams and events, believing that sports bring people together and strengthen communities.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental impact through eco-friendly products and responsible business practices.</p>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>John Smith</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>Sarah Johnson</h3>
              <p>Head of Product</p>
            </div>
            <div className="team-member">
              <h3>Mike Williams</h3>
              <p>Customer Service Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;