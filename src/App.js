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
      <Header />
      <Hero />
      <WhoAreWe />
      <WhyUs />
      <Client />
      <Service />
      <Production />
      <Team />
      <Contact />
    </div>
  )
}

export default App
