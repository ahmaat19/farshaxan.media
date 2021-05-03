import abdikani from '../images/abdikani.png'
import abdishakur from '../images/abdishakur.jpeg'
import ramla from '../images/ramla.jpg'
import iman from '../images/iman.jpg'
import ikram from '../images/ikram.jpeg'

const Team = () => {
  return (
    <div className='ourTeam py-5 container' id='our-team'>
      <h1 class='display1 title'>Our Expert Team</h1>
      <p className='text-primary text-center pt-3'>
        Meet our team of marketing consultants, graphic designers, video/audio
        producers, out-of-home marketing experts, food artists, advertising
        characters. <br />
        Helping Mogadishu famous business and brands to reach and influence
        their target market using magic marketing.
      </p>

      <div class='row gy-5 py-5'>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={iman}
              alt='consultation'
              className='card-img-fluid card-img-top w-50 mx-auto rounded-pill'
            />
            <div class='card-body'>
              <div class='card-title'>Iman Osman Mohamed </div>
              <div class='card-text'>
                <p className='text-primary'>Sales & Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={ramla}
              alt='consultation'
              className='card-img-fluid card-img-top w-50 mx-auto rounded-pill'
            />
            <div class='card-body'>
              <div class='card-title'>Ramla Abdulkadir Mohamud </div>
              <div class='card-text'>
                <p className='text-primary'>Social Media Specialist</p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={ikram}
              alt='consultation'
              className='card-img-fluid card-img-top w-50 mx-auto rounded-pill'
            />
            <div class='card-body'>
              <div class='card-title'>Ikram Abdirizak Mohamed </div>
              <div class='card-text'>
                <p className='text-primary'>Sales Assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={abdishakur}
              alt='consultation'
              className='card-img-fluid card-img-top w-50 mx-auto rounded-pill'
            />
            <div class='card-body'>
              <div class='card-title'>Abdishakur Dhaqane </div>
              <div class='card-text'>
                <p className='text-primary'>Cameraman</p>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-2 col-md-4 col-sm-6 col-12 mx-auto'>
          <div class='card bg-transparent border-0 text-center'>
            <img
              src={abdikani}
              alt='consultation'
              className='card-img-fluid card-img-top w-50 mx-auto rounded-pill'
            />
            <div class='card-body'>
              <div class='card-title'>Abdikani Abukar Samow </div>
              <div class='card-text'>
                <p className='text-primary'>Media Technician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
