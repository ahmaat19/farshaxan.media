import we from '../images/we.svg'

const WhoAreWe = () => {
  return (
    <div className='whoAreWe py-5 my-5 container' id='about-us'>
      <h1 class='display1 title'>Who Are We?</h1>
      <div class='row pt-5'>
        <div class='col-md-6 col-12'>
          <p className='text-primary '>
            We are a private company, offering marketing campaign, graphic
            designing with consultations, photo-video-audio production and media
            solutions to businesses, governmental and non-governmental
            organisations. <br />
            We specialise in helping businesses with marketing campaigns
            including home and out-of-home advertising campaigns, contents
            consultation & management. <br />
            We design, build, test and deploy marketing campaigns. <br />
            We also report the progress of the campaign in real-time to provide
            its customers maximum flexibility. <br />
            At the end of each campaign, we analyse its success to improve the
            client’s future campaigns.
          </p>
        </div>
        <div class='col-md-6 col-12 text-center'>
          <img src={we} alt='who are we' className='img-fluid w-50' />
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
