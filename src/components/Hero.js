import marketing from '../images/digital.svg'
import { FaArrowCircleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='d-flex justify-content-center align-items-center hero container'>
      <div className='row gy-5'>
        <div className='col-md-6 col-12 my-auto' style={{ zIndex: 1 }}>
          <div class='text-box'>
            <h1 class='display-1 fw-bold'>IS SHEEG AAN KU SHAACINNE</h1>
            <p className='text-muted pb-5' style={{ letterSpacing: 6 }}>
              Finding The Dream For Every Owner
            </p>
            <button className='btn btn-primary shadow-none  fw-bold py-2 px-4 shadow-lg rounded-pill'>
              Learn More <FaArrowCircleDown />
            </button>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <img src={marketing} alt='farshaxan' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Hero
