import we from '../images/we.svg'

const WhoAreWe = () => {
  return (
    <div class='top-round container-fluid'>
      <div className='whoAreWe py-5 container' id='about-us'>
        <div class='row pt-5'>
          <div class='col-md-3 col-12 my-auto'>
            <h1 class='display1 title'>
              Who <br /> Are <br /> We?
            </h1>
          </div>

          <div class='col-md-9 col-12'>
            <p className='text-primary '>
              We are a private company, offering marketing campaign, graphic
              designing with consultations, photo-video-audio production and
              media solutions to businesses, governmental and non-governmental
              organisations. <br />
              We specialise in helping businesses with marketing campaigns
              including home and out-of-home advertising campaigns, contents
              consultation & management. <br />
              We design, build, test and deploy marketing campaigns. <br />
              We also report the progress of the campaign in real-time to
              provide its customers maximum flexibility. <br />
              At the end of each campaign, we analyse its success to improve the
              client’s future campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
