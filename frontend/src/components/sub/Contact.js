import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'
import LazyLoad from 'react-lazyload'
import footer_logo from '../../images/footer_logo.PNG'
import qrcode from '../../images/qrcode.png'

const Contact = () => {
  return (
    <div className='contact py-5 my-5 container' id='contact-us'>
      <h1 class='display1 title'>Get In Touch</h1>
      <p className='text-primary text-center pt-3'>
        Sometimes you need a little help from your friends. Or support rep.
        Don’t worry… we’re here for you
      </p>

      <div class='row'>
        <div className='col-md-6 col-12 pt-4 '>
          <LazyLoad height={200} once={true}>
            <img
              src={footer_logo}
              alt='footer logo'
              className='img-fluid w-25'
            />
          </LazyLoad>
          <h3 className='fw-light'>Head Office</h3>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaMap />
              </span>{' '}
              <a
                target='blank'
                href='https://maps.google.com/maps?q=2.035447359085083%2C45.311588287353516&z=17&hl=en'
                className='text-primary'
              >
                Daarta Bunka, Talex, Hodan District, Mogadishu - Somalia.
              </a>
            </li>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaPhone />
              </span>{' '}
              <a
                target='blank'
                href='tel:+252614950432'
                className='text-primary'
              >
                +252 61 495 0432
              </a>
            </li>
            <li class='list-group-item bg-transparent text-primary'>
              <span className='text-secondary'>
                <FaEnvelope />
              </span>{' '}
              <a
                target='blank'
                href='mailto:info@farshaxan.media'
                className='text-primary'
              >
                info@farshaxan.media
              </a>
            </li>
          </ul>
          <div className='btn-group mt-5'>
            <a
              href='https://www.facebook.com/FarshaxanMedia1'
              target='blank'
              className='mx-3 text-secondary'
            >
              <FaFacebook className='fs-2 ' />
            </a>
            <a
              href='https://www.instagram.com/farshaxan.media/'
              target='blank'
              className='mx-3 text-secondary'
            >
              <FaInstagram className='fs-2 ' />
            </a>
            <a
              href='https://www.linkedin.com/company/farshaxan-media/'
              target='blank'
              className='mx-3 text-secondary'
            >
              <FaLinkedin className='fs-2 ' />
            </a>
            <a
              href='https://twitter.com/FarshaxanMedia'
              target='blank'
              className='mx-3 text-secondary'
            >
              <FaTwitter className='fs-2 ' />
            </a>
            {/* <LazyLoad height={200} once={true}>
              <img src={qrcode} alt='qr-code' className='img-fluid w-25' />
            </LazyLoad> */}
          </div>
        </div>
        <div className='col-md-6 col-12 text-center pt-4'>
          <form>
            <div class='row'>
              <div class='col-6'>
                <div class='mb-3'>
                  <input
                    type='text'
                    className='form-control border-1 border-warning text-secondary rounded-0 bg-transparent'
                    placeholder='First Name'
                  />
                </div>
              </div>
              <div class='col-6'>
                <div class='mb-3'>
                  <input
                    type='text'
                    className='form-control border-1 border-warning text-secondary rounded-0 bg-transparent'
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div class='col-12'>
                <div class='mb-3'>
                  <input
                    type='email'
                    class='form-control border-1 border-warning text-secondary rounded-0 bg-transparent'
                    placeholder='Email Address'
                  />
                </div>
              </div>
              <div class='col-12'>
                <div class='mb-3'>
                  <textarea
                    class='form-control border-1  border-warning text-secondary rounded-0 bg-transparent'
                    rows='10'
                    placeholder='Comment'
                  />
                </div>
                <div class='col-12'>
                  <button class='btn sendBtn float-end rounded-pill'>
                    Send <FaPaperPlane />{' '}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
