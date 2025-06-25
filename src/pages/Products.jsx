import React from 'react'
import './Products.css'
import program_1 from '../assets/program_1.jpg'
import program_2 from '../assets/program_2.jpg'
import program_3 from '../assets/program_3.jpg'
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const navigate = useNavigate();
  return (
    <div className='product_container'>
      <h1>Our Latest Product</h1>
      <div className='programs'>

        <div className='program'>
          <img src={program_1} alt="" srcset="" />
        </div>
        <div className='program'>
          <img src={program_2} alt="" srcset="" />
        </div>
        <div className='program'>
          <img src={program_3} alt="" srcset="" />
        </div>

      </div>
      <div className='desc'>
        <h1> Triflex</h1>

        <p>
          Triflex is an intelligent, motorized rehabilitation device designed to support upper limb therapy — specifically targeting the shoulder, elbow, and wrist joints. It helps physiotherapists deliver automated, consistent, and customizable movement therapy for patients recovering from conditions such as stroke, orthopedic surgery, or neurological disorders.

          Triflex reduces the manual effort required by therapists while ensuring that each movement is precise, repeatable, and safe for the patient.
        </p>
        <button onClick={() => navigate('/contact')} className='btn2'> Enquiry </button>

      </div>
    </div>
  )
}

export default Products
