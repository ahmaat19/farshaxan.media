import Header from './components/Header'
import Hero from './components/Hero'
import Production from './components/Production'
import Service from './components/Service'
import Team from './components/Team'
import WhoAreWe from './components/WhoAreWe'
import WhyUs from './components/WhyUs'
import Client from './components/Client'
import Contact from './components/Contact'

function App() {
  return (
    <div className='App'>
      <div className='bg-dark-blue'>
        <Header />
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

export default App
