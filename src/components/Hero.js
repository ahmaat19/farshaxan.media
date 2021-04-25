import marketing from '../images/digital.svg'
import video from '../images/background_video.MP4'
import { FaArrowCircleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <header className='hero-header'>
      <div className='overlay'></div>
      <video
        playsInline='play'
        autoPlay='autoplay'
        muted='muted'
        loop='loop'
        className='h-back'
      >
        <source src={video} type='video/mp4' />
      </video>

      <div className='d-flex justify-content-center vh-100 align-items-center hero py-5 my-4s container h-top'>
        <div className='text-center'>
          <h1 className='display-1 fw-bold'>Is sheeg aan ku shaacinnee</h1>
          <p className='pb-5 text-light' style={{ letterSpacing: 4 }}>
            Our motto is to fulfill customer demand by making them satisfied
            with growing their business.
          </p>
          <a
            href='#about-us'
            className='btn btn-primary border-0 shadow-none  fw-bold py-2 px-4 shadow-lg rounded-pill'
          >
            Learn More <FaArrowCircleDown />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
