import React from 'react';
import './AboutUs.css'; // Optional: include if you have custom styles for this section

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Paradise Nursery</h1>
      
      <p className="about-us-description">
        Welcome to <strong>Paradise Nursery</strong>, your premier online destination for lush, high-quality houseplants! 
        Our goal is to connect plant lovers with a wide selection of green companions that bring life, color, and tranquility into every home or workspace.
      </p>

      <p className="about-us-description">
        From air-purifying foliage to soothing aromatic and medicinal plants, each specimen in our inventory is carefully nurtured to ensure top quality. 
        Whether you are an experienced gardener or just embarking on your plant-parenting journey, Paradise Nursery provides the perfect green addition for your living space.
      </p>

      <div className="plant-quote">
        <em>"Where green meets serenity — bring nature closer to your home."</em>
      </div>
    </div>
  );
}

export default AboutUs;
