import React from "react";
import './about.css';
import FounderImg from "../assets/founder.jpeg";
import FarmImg from "../assets/farm.jpeg";

function About(){
    return(
    <div className="about-container">
        <section className="about-hero">
            <h1>Our Story</h1>
            <p>Bridging the gap between rural roots and urban reach.</p>
        </section>
        <section className="about-content">
            <h2>The Velora Mission</h2>
            <p>
          Tamil Nadu has made remarkable progress across many sectors, standing 
          alongside developed regions in growth and innovation. However, there 
          remains another side of the state that continues to face significant 
          challenges—particularly in rural and agricultural communities.
        </p>
        <p>
          Our vision is to bridge this gap by connecting these two worlds in a 
          meaningful and sustainable way. We aim to create a platform where both 
          sides can support and depend on each other. On one side, farmers provide 
          fresh, healthy, and organic food. On the other side, urban communities 
          contribute advanced technology, accessibility, and market opportunities.
        </p>
        <p>
          Tamil Nadu’s unique district structure naturally supports this idea. In 
          most districts, development is concentrated in central urban areas, while 
          the surrounding regions are largely rural villages where agriculture is 
          the primary livelihood. Our platform focuses on connecting these rural 
          farming communities with the urban centers within each district.
        </p>
        </section>
        <section className="about-banner">
            <img src={FarmImg} alt="Velora Farms" />
        </section>

        <section className="about-values"></section>
        <section className="about-values">
            <div className="value-card">
                <h3>Direct Trade</h3>
                <p>Supporting independent farmer with fair pricing and transparent partnerships. </p>
            </div>
            <div className="value-card">
                <h3>Timely Deliveries</h3>
                <p>
                 Order today and enjoy farm-fresh produce delivered by tomorrow morning. 
                 We ensure your kitchen is stocked with the freshest ingredients 
                 before your day begins.
                </p>
            </div>
        </section>
        <section className="about-founder">
            <div className="founder-text">
                <h2>Meet the Founder</h2>
                <p> "I am a person who believes in using technology to solve real-world problems. 
      I am passionate about creating meaningful connections between people, especially 
      where there is a gap between growth and opportunity. This project reflects my 
      vision of building solutions that support both farmers and communities, making 
      growth more balanced and inclusive."
                </p>
                <span>Chandru Founder</span>
            </div>
            <div className="founder-image">
                <img src={FounderImg} alt="Founder "/>
            </div>
        </section>
    </div>
    );
}
export default About;