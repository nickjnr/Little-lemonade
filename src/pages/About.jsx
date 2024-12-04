import Footer from "../components/footer"
import Header from "../components/header"
import DecorativeSection from "../components/shared/decorativeSection/index"

const PageAboutUs = () => {

  return (
    <>
      <Header HeroSection={false} />
      <DecorativeSection title={"About us"} />
      <Footer />
    </>
  )
}

export default PageAboutUs