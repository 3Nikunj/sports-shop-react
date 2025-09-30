import React, { useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'team-sports', name: 'Team Sports' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const products = [
    { id: 1, name: 'Basketball', price: 59.99, category: 'team-sports', image: './images/basketball.svg' },
    { id: 2, name: 'Running Shoes', price: 89.99, category: 'fitness', image: './images/running-shoes.svg' },
    { id: 3, name: 'Tennis Racket', price: 129.99, category: 'team-sports', image: './images/tennis-racket.svg' },
    { id: 4, name: 'Yoga Mat', price: 29.99, category: 'fitness', image: './images/running-shoes.svg' },
    { id: 5, name: 'Hiking Backpack', price: 79.99, category: 'outdoor', image: './images/equipment-rental.svg' },
    { id: 6, name: 'Soccer Ball', price: 49.99, category: 'team-sports', image: './images/soccer-ball.svg' },
    { id: 7, name: 'Water Bottle', price: 19.99, category: 'accessories', image: './images/equipment-rental.svg' },
    { id: 8, name: 'Football', price: 149.99, category: 'team-sports', image: './images/football.svg' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>
        
        <div className="category-filter">
          <h3>Categories</h3>
          <ul>
            {categories.map(category => (
              <li key={category.id}>
                <button 
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;