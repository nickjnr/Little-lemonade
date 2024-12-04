import Footer from "../components/footer"
import Header from "../components/header"
import DecorativeSection from "../components/shared/decorativeSection/index"

const Login = () => {

  return (
    <>
      <Header HeroSection={false} />
      <DecorativeSection title={"Login"} />
      <Footer />
    </>
  )
}

export default Login