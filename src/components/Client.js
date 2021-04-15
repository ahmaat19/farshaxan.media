import banadirio from '../images/banadirio.png'
import laas from '../images/laas.png'
import aragsan from '../images/aragsan.png'
import salsabiil from '../images/salsabiil.png'
import samiira from '../images/samiira.png'

const Client = () => {
  return (
    <div className='ourWork py-5 my-5 container' id='our-work'>
      <h1 class='display1 title'>Our Clients</h1>
      <p className='text-primary text-center pt-3'>
        Meet our top clients around the world
      </p>

      <div class='row g-5 mx-auto pt-5'>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={banadirio} alt='clients' className='img-fluid w-50' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={laas} alt='clients' className='img-fluid w-50' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={aragsan} alt='clients' className='img-fluid w-25' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={salsabiil} alt='clients' className='img-fluid w-50' />
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto m-2  '>
          <img src={samiira} alt='clients' className='img-fluid w-25' />
        </div>
      </div>
    </div>
  )
}

export default Client
