import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import {
  FaEnvelope,
  FaMap,
  FaPaperPlane,
  FaPhone,
  FaShareAlt,
} from 'react-icons/fa'

const Contact = () => {
  const [zoom, setZoom] = useState(11)
  const [center, setCenter] = useState({
    center: {
      lat: 2.03174,
      lng: 45.322008,
    },
  })

  return (
    <div className='contact py-5 my-5 container' id='contact-us'>
      <h1 class='display1 title'>Get In Touch</h1>
      <p className='text-primary text-center pt-3'>
        Sometimes you need a little help from your friends. Or support rep.
        Don’t worry… we’re here for you
      </p>

      <div class='row'>
        <div className='col-md-6 col-12 text-center pt-4 '>
          <div style={{ height: '100vh', width: '100%' }}>
            {/* <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyA3zrMSPfxvo9h0pLUhLECOztG0h3cKfw4',
              }}
              defaultCenter={center.center}
              defaultZoom={zoom}
            /> */}

            <h3 className='fw-light'>Head Office</h3>
            <ul class='list-group list-group-flush text-center'>
              <li class='list-group-item bg-transparent text-primary'>
                <span className='text-secondary'>
                  <FaMap />
                </span>{' '}
                Talex District, Mogadishu - Somalia.
              </li>
              <li class='list-group-item bg-transparent text-primary'>
                <span className='text-secondary'>
                  <FaPhone />
                </span>{' '}
                <a href='tel:+252614593819' className='text-primary'>
                  +252 61 459 3819
                </a>
              </li>
              <li class='list-group-item bg-transparent text-primary'>
                <span className='text-secondary'>
                  <FaEnvelope />
                </span>{' '}
                <a
                  href='mailto:media.farshaxan@gmail.com'
                  className='text-primary'
                >
                  media.farshaxan@gmail.com
                </a>
              </li>
            </ul>
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
