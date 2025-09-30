import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Welcome to SportShop</h1>
          <p>Your one-stop destination for quality sports equipment</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-info">
                <h3>Professional Basketball</h3>
                <p>$59.99</p>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Running Shoes</h3>
                <p>$89.99</p>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Tennis Racket</h3>
                <p>$129.99</p>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promotions">
        <div className="container">
          <h2>Special Offers</h2>
          <div className="promo-grid">
            <div className="promo-card">
              <h3>Summer Sale</h3>
              <p>Get up to 30% off on all summer sports equipment</p>
              <button className="btn btn-outline">View Deals</button>
            </div>
            <div className="promo-card">
              <h3>New Arrivals</h3>
              <p>Check out our latest collection of fitness gear</p>
              <button className="btn btn-outline">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;