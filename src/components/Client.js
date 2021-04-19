import banadiria from '../images/banadiria.jpg'
import laas from '../images/laas.jpg'
import aragsan from '../images/aragsan.jpg'
import samira from '../images/samira.jpg'

import castelo from '../images/castelo.jpg'
import sada from '../images/sada.JPG'
import shampoo from '../images/shampoo.JPG'
import sultan from '../images/sultan.jpg'
import somali from '../images/somali.jpg'
import hiddasoor from '../images/hiddasoor.jpg'

const Client = () => {
  return (
    <div className='ourWork py-5 my-5 container' id='our-work'>
      <h1 class='display1 title'>Our Clients</h1>
      <p className='text-primary text-center pt-3'>
        Meet our top clients around the world
      </p>

      <div class='row g-5 mx-auto pt-5'>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={shampoo} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={sada} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={castelo} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={hiddasoor} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={sultan} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={somali} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={laas} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={samira} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={aragsan} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={banadiria} alt='clients' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Client
