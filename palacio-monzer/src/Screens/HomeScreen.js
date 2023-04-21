import React from 'react';
import Banner from '../Components/Banner';
import HeroBackground from '../Components/HeroBackground';
import Services from '../Components/Services';
import Title from '../Components/Title';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function HomeScreen() {
  return (
    <>
      <HeroBackground>
        <Banner
          title="Palacio Patisserie"
          subtitle="Experience the thrill of our products."
        ></Banner>
      </HeroBackground>
      <Title title="Our Products" />
      
      <div className="about-us-container">
        <div className="about-us-header">
          <h1 className="about-us-heading">About Us</h1>
          <div className="about-us-contact">
            <div className="about-us-icon">
              <FaMapMarkerAlt />
            </div>
            <p className="about-us-text">Bekaa, Rayak</p>
            <div className="about-us-icon">
              <FaPhoneAlt />
            </div>
            <p className="about-us-text">(961) 03 042 786</p>
          </div>
        </div>
        <div className="about-us-content">
          <p className="about-us-text">
            Welcome to Palacio
          </p>
          <p className="about-us-text">
            description
          </p>
          <p className="about-us-text">
            information
          </p>
        </div>
      </div>
      <Services />
    </>
  );
}