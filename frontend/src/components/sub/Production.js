import React from 'react'
import LazyLoad from 'react-lazyload'
import corporate from '../../images/corporate.jpeg'
import photographing from '../../images/photographing.jpeg'

const Production = () => {
  return (
    <div className='ourProduction py-5 container' id='our-productions'>
      <h1 class='display1 title'>Our Production</h1>
      <div class='row gy-5 pt-4'>
        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <img
              src='https://i.pinimg.com/originals/9d/4e/8b/9d4e8bdd52843350fe6c60291e396d28.png'
              alt='consultation'
              className='card-img-fluid card-img-top  mx-auto'
            />
            <div class='card-body'>
              <div class='card-title'> Digital Menu </div>
              <div class='card-text'>
                <p className='text-primary'>
                  Food presentation displays, smart menu development & QR code
                  development
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <LazyLoad height={200} once={true}>
              <img
                src='https://khazina.co.uk/blog/wp-content/uploads/2018/04/IMG_0222-700x500.jpg'
                alt='consultation'
                className='card-img-fluid card-img-top  mx-auto'
              />
            </LazyLoad>
            <div class='card-body'>
              <div class='card-title'> Digital Board </div>
              <div class='card-text'>
                <p className='text-primary'>
                  Schools, Universities, hospital smart board contents, & beauty
                  salon
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <LazyLoad height={200} once={true}>
              <img
                src={photographing}
                alt='photographing'
                className='card-img-fluid card-img-top  mx-auto'
              />
            </LazyLoad>
            <div class='card-body'>
              <div class='card-title'> Photographing </div>
              <div class='card-text'>
                <p className='text-primary'>
                  Producing business gallery, producing food and advertisement
                  photo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <LazyLoad height={200} once={true}>
              <img
                src={corporate}
                alt='corporate'
                className='card-img-fluid card-img-top  mx-auto'
              />
            </LazyLoad>
            <div class='card-body'>
              <div class='card-title'> Corporate Video </div>
              <div class='card-text'>
                <p className='text-primary'>
                  About us video, FAQ video, Product / Services video, Customer
                  testimonial video, Process explanation video, Safety &
                  training video, and financial results video.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <LazyLoad height={200} once={true}>
              <img
                src='https://www.disruptivestatic.com/wp-content/uploads/2018/01/facebook-video-ads-blog.jpg'
                alt='consultation'
                className='card-img-fluid card-img-top  mx-auto'
              />
            </LazyLoad>
            <div class='card-body'>
              <div class='card-title'> Promotional Video </div>
              <div class='card-text'>
                <p className='text-primary'>
                  Market introduction video, Customer retention video, Brand
                  switch video and switching back video
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div class='card bg-transparent border-0 text-center shadow-lg'>
            <LazyLoad height={200} once={true}>
              <img
                src='https://www.beacontelecom.com/wp-content/uploads/2020/05/video-conferencing.jpeg'
                alt='consultation'
                className='card-img-fluid card-img-top  mx-auto'
              />
            </LazyLoad>
            <div class='card-body'>
              <div class='card-title'> Communications Video </div>
              <div class='card-text'>
                <p className='text-primary'>Public news messages video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Production
