import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SportShop</h3>
            <p>Your one-stop destination for all sports equipment and accessories.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@sportshop.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Sports Avenue, Athletic City</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SportShop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;