import React from 'react'
import './About.css'
import aboutimg from '../assets/aboutimg1.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={aboutimg} alt="" className='aboutimg'/>

      </div>
      <div className="about_right">
        <h2>About Us</h2>
        <h3> Vein Automated Sysytems Pvt.ltd</h3>
        <p>Vein Automated System Private Limited is a medical technology company established in 2024. We specialize in designing and developing intelligent rehabilitation devices for clinical use.
</p>
        <p>Our mission is to deliver reliable, efficient, and affordable automation-based solutions to support physical therapy, particularly for upper limb rehabilitation.
</p>
        <p>With a passionate team of engineers and healthcare professionals, we aim to bridge the gap between technology and patient care through user-friendly innovations.
</p>
        <p>Our first product, Triflex, addresses the growing need for effective arm rehabilitation after stroke, injury, or surgery.</p>

      </div>
      
    </div>
  )
}

export default About
