import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

const App = () => {
  
  return (
    <>
      <Header HeroSectionOpen={true} />
      <Main />
      <Footer />
    </>
  )
}

export default App