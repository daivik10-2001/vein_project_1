import React from 'react'
import './hero.css'
import { useNavigate} from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero container1'>
        <div className='hero-text'>
            <h1>Vein Automated Systems</h1>
            <h1>Vein Automated Systems</h1>


            <p>Empowering the Future of Medical Innovation through advanced Technology</p>
            <button onClick={() => navigate('/products')} className='btn1'>Explore Products </button>
        </div>
        
      
    </div>
  )
}

export default Hero
