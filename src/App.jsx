import { MainContainer } from './styles'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { HeroTwo } from './components/HeroTwo/HeroTwo'
import { HeroMid } from './components/HeroMid/HeroMid'
import '../src/global.css'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <MainContainer>
      <Header/>
      <Hero/>
      <HeroTwo/>
      <HeroMid/>
      <Footer/>
    </MainContainer>
  )
}

export default App
