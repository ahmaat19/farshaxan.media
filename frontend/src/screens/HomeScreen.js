import Header from '../components/sub/Header'
import Hero from '../components/sub/Hero'
import Production from '../components/sub/Production'
import Service from '../components/sub/Service'
import Team from '../components/sub/Team'
import WhoAreWe from '../components/sub/WhoAreWe'
import WhyUs from '../components/sub/WhyUs'
import Client from '../components/sub/Client'
import Contact from '../components/sub/Contact'

const HomeScreen = () => {
  return (
    <div className='App'>
      <div className='bg-dark-blue'>
        {/* <Header /> */}
        <Hero />
      </div>

      <div class='bg-dark-blue whoarewe-top'>
        <WhoAreWe />
      </div>

      <div className='bg-dark-blue'>
        <WhyUs />
      </div>
      <div className='bg-dark-blue'>
        <Production />
      </div>
      <div className='bg-dark-blue'>
        <Service />
      </div>
      <div className='bg-dark-blue'>
        <Client />
      </div>
      <div className='bg-dark-blue'>
        <Team />
      </div>
      <div class='dark-blue'>
        <Contact />
      </div>
    </div>
  )
}

export default HomeScreen
