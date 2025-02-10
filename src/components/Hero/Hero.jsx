import React from 'react'
import "./hero.css"
import Pic1 from "../../assets/pic1.JPG"
import Pic2 from "../../assets/pic-2.JPG"
import Pic3 from "../../assets/pic-3.JPG"



const Hero = () => {
  return (
    <div className="hero-container">
      <div className="main-text-container">
        <h1>Hi 👋, I'm Lungelo</h1>
        <h2>I'm a Full-Stack Software Developer passionate about building scalable web and mobile applications.</h2>
        <p>What sets me apart? I take a full-cycle approach to development—from designing intuitive user experiences to optimizing backend performance and deploying cloud-native applications.</p>
        <div className="hero-buttons">
          <button>Explore my work</button>
          <button>Let's Collaborate</button>
        </div>
        <div className="project-count">
          <h1>+11 Projects</h1>
        </div>
      </div>

      <div className="picture-grid">
        <img className="pic-1" src={Pic1} alt="" />
        <img src={Pic2} alt="" />
        <img src={Pic3} alt="" />
      </div>

      
    </div>
  )
}

export default Hero