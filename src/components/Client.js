import banadiria from '../images/banadiria.png'
import laas from '../images/laas.png'
import aragsan from '../images/aragsan.png'
import samira from '../images/samira.png'

import castelo from '../images/castelo.png'
import sada from '../images/sada.png'
import shampoo from '../images/shampoo.png'
import sultan from '../images/sultan.png'
import somali from '../images/somali.png'
import hiddasoor from '../images/hiddasoor.png'

const Client = () => {
  return (
    <div className='ourWork pb-5  container' id='our-work'>
      <h1 class='display1 title'>Our Clients</h1>
      <p className='text-primary text-center pt-3'>Meet our top clients</p>

      <div class='row gy-5 mx-auto pt-5'>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={aragsan} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={laas} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={banadiria} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={castelo} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={sada} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={hiddasoor} alt='clients' className='img-fluid' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={sultan} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={shampoo} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={somali} alt='clients' className='img-fluid' />
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={samira} alt='clients' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Client
