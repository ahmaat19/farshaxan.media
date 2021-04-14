import marketing from '../images/digital.svg'
import { FaArrowCircleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='d-flex justify-content-center align-items-center  py-5 container'>
      <div className='row '>
        <div className='col-md-6 col-12 my-auto'>
          <h1 class='display-1 fw-bold'>Is Sheeg Aan Ku Shaacinnee</h1>
          <p className='text-muted pb-5' style={{ letterSpacing: 4 }}>
            Our motto is to fulfill customer demand by making them satisfied
            with growing their business.
          </p>
          <button className='btn btn-primary shadow-none  fw-bold py-2 px-4 shadow-lg rounded-pill'>
            Learn More <FaArrowCircleDown />
          </button>
        </div>

        <div className='col-md-6 col-12'>
          <img src={marketing} alt='farshaxan' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Hero
