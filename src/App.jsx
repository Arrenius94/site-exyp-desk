import { MainContainer } from './styles'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { HeroTwo } from './components/HeroTwo/HeroTwo'
import { HeroMid } from './components/HeroMid/HeroMid'
import '../src/global.css'

function App() {

  return (
    <MainContainer>
      <Header/>
      <Hero/>
      <HeroTwo/>
      <HeroMid/>
    </MainContainer>

  )
}

export default App
