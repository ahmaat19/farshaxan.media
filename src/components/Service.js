import {
  FaCheckCircle,
  FaCheckDouble,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import service from '../images/service.svg'
import socialmedia from '../images/socialmedia.png'
import consultation from '../images/consultation.png'
import screen from '../images/screen.png'

const Service = () => {
  return (
    <div className='ourService py-5 container' id='our-services'>
      <h1 class='display1 title'>Our Services</h1>
      <p className='text-primary text-center pt-3'>
        Our marketing solution services help you reach your sales target, <br />
        whether you want to engage new customers or want an old customer likes
        and trusts your brand.
      </p>

      <div class='row'>
        <div className='col-md-6 col-12 text-center'>
          <img src={service} alt='service' className='img-fluid w-75' />
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p className='text-secondary'>
            Advertisement solution is only at the start.
          </p>
          <p className='text-primary'>
            To have more successful campaign is in the middle. <br /> The
            process starts with presentation, where we persuade, present,
            propose, visit your site, develop your project, demonstrate, and
            distribute. <br /> This business process will create the desired
            outcome and it ends with continuous testing and optimising to make
            sure the results we are getting are the best they can be.
          </p>
        </div>
      </div>

      <div class='row gy-5 py-5'>
        <div class='col-md-4 col-12'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={consultation}
              alt='consultation'
              className='card-img-fluid card-img-top w-25 mx-auto'
            />
            <div class='card-body'>
              <div class='card-title'> Marketing Consultation</div>
              <div class='card-text'>
                <p className='text-primary'>
                  Consulting the marketing strategy and video strategy
                  businesses need, write video script, audio branding, social
                  media, and contents creation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-md-4 col-12'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={screen}
              alt='screen'
              className='card-img-fluid card-img-top w-25 mx-auto'
            />
            <div class='card-body'>
              <div class='card-title'> Screen Advertisement Platform </div>
              <div class='card-text'>
                <p className='text-primary'>
                  We have 30 indoor locations ready for you to make your
                  advertisement those locations are divided into four
                  advertisement platform package services
                </p>

                <ul class='list-group list-group-flush text-start'>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Package One 10 most traffics
                  </li>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Package Two 10 medium traffics
                  </li>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Package Three 10 least traffics
                  </li>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Package Four 10 your own mix selection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class='col-md-4 col-12'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={socialmedia}
              alt='social media'
              className='card-img-fluid card-img-top w-25 mx-auto'
            />
            <div class='card-body'>
              <div class='card-title'> Social Media Management </div>
              <div class='card-text'>
                <ul class='list-group list-group-flush text-start'>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Social Media Strategy Development
                  </li>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Social Media Management Service
                  </li>
                  <li class='list-group-item bg-transparent text-primary'>
                    <span className='text-secondary'>
                      <FaCheckCircle />
                    </span>{' '}
                    Social Media Analysis & Reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
