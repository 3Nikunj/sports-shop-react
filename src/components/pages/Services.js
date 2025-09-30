import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Equipment Repair',
      description: 'Professional repair services for all types of sports equipment. Our technicians have years of experience fixing everything from tennis rackets to fitness machines.',
      image: './images/equipment-repair.svg'
    },
    {
      id: 2,
      title: 'Personal Training',
      description: 'One-on-one training sessions with certified fitness professionals. Custom workout plans tailored to your specific goals and fitness level.',
      image: './images/personal-training.svg'
    },
    {
      id: 3,
      title: 'Team Outfitting',
      description: 'Complete uniform and equipment solutions for sports teams of all sizes. Custom designs, printing, and bulk discounts available.',
      image: './images/team-outfitting.svg'
    },
    {
      id: 4,
      title: 'Equipment Rental',
      description: 'Rent high-quality sports equipment for your next adventure or event. Daily, weekly, and monthly rental options available.',
      image: './images/equipment-rental.svg'
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <p className="services-intro">
          At SportShop, we offer a variety of services to help you get the most out of your sporting experience.
          From equipment repair to personal training, we've got you covered.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn btn-outline">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="service-cta">
          <h2>Need a Custom Service?</h2>
          <p>Contact us to discuss how we can help with your specific sporting needs.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Services;