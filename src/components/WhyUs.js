import { FaCheckDouble } from 'react-icons/fa'
import why from '../images/why.svg'

const WhyUs = () => {
  return (
    <div className='whoAreWe py-5 my-5 container' id='about-us'>
      <h1 class='display1 title'>Why Us?</h1>
      <div class='row pt-5'>
        <div class='col-md-6 col-12 my-auto'>
          <ul class='list-group list-group-flush text-start'>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaCheckDouble />
              </span>{' '}
              We provide the one and only, high-quality products/services, quick
              responsiveness, and one project into four marketing solutions
              within its service and productions area.
            </li>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaCheckDouble />
              </span>{' '}
              Our staff’s personnel who have superior knowledge of technology to
              support creative graphic designs, innovative marketing campaigns
              and production of videos, audios, images, animations, and text.
            </li>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaCheckDouble />
              </span>{' '}
              We offers the best customer care possible by maintaining its full
              customer retention and highly experienced customers in the
              services process step-by-step.
            </li>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaCheckDouble />
              </span>{' '}
              We sales outreach team will be promoted his/her personal sales
              performance and he/she will be facilitated how to approach and
              reach to the customer’s premises to close the best favourable
              commercial deal. So FARSHAXAN will be a deal maker instead of
              opening doors and waiting customers are visiting the business
              premises.
            </li>
          </ul>
        </div>
        <div class='col-md-6 col-12 text-center'>
          <img src={why} alt='who are we' className='img-fluid w-100' />
        </div>
      </div>
    </div>
  )
}

export default WhyUs
