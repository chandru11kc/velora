import React from "react"; 
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.png";
import LifecycleImg from "../assets/lifecycle.jpeg";
import "./home.css";

function Home() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="home-container">

        <div className="hero-content">
          <h1>இயற்கையின் சுவை</h1>

          <h2>Fresh from Farm to Your Door</h2>

          <p>
            Buy directly from farmers. Fresh products for you,
            fair value for them.
          </p>

          <Link to="/shop">
            <button className="primary-btn">Shop Now</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Fresh Organic Produce" />
        </div>

      </div>

      {/* 🌿 HUMAN CONNECTION SECTION */}
      <section className="farm-life">
        <div className="farm-life-content">

          <div className="farm-image">
            <img src={LifecycleImg} alt="Farmer support" />
          </div>

          <div className="farm-text">
            <h2>When Helping Becomes Easy</h2>

            <p>
              Many people are willing to support others, but everyday life
              doesn’t always make it easy to act on that intention.
            </p>

            <p>
              When the process becomes simple, support happens naturally.
              Small actions from individuals can create meaningful impact.
            </p>

            <p>
              Velora connects people and farmers directly — building a system
              based on respect, trust, and shared growth.
            </p>

            <Link to="/farmer">
              <button className="explore-btn">Our Farmers</button>
            </Link>
          </div>

        </div>
      </section>
      {/* ⭐ WHY CHOOSE VELORA */}
      <section className="why-velora">

        <h2 className="why-title">Why Choose Velora?</h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">🌱</div>
            <h3>Fresh & Natural</h3>
            <p>Products sourced directly from farms with no middle layers.</p>
          </div>

          <div className="why-card">
            <div className="icon">🤝</div>
            <h3>Support Farmers</h3>
            <p>Fair pricing ensures farmers get the value they deserve.</p>
          </div>

          <div className="why-card">
            <div className="icon">⚡</div>
            <h3>Simple & Fast</h3>
            <p>Easy ordering process designed for everyday convenience.</p>
          </div>

        </div>
      </section>

      {/* 🌾 LIFECYCLE SECTION */}
      <section className="lifecycle">

        <h2 className="lifecycle-title">From Farm to Your Plate</h2>

        <div className="timeline">

          <div className="timeline-step">
            <div className="circle">🌱</div>
            <h3>Seed</h3>
            <p>Carefully selected seeds are planted in fertile soil.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">🌿</div>
            <h3>Grow</h3>
            <p>Crops grow with sunlight, water, and natural care.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">🚜</div>
            <h3>Harvest</h3>
            <p>Farmers harvest fresh produce at the right time.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">🚚</div>
            <h3>Deliver</h3>
            <p>Fresh produce is transported quickly and safely.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">🍽️</div>
            <h3>Enjoy</h3>
            <p>Healthy food reaches your home, ready to enjoy.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;