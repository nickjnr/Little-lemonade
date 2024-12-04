import style from "./style.module.css"
import Highlights from "../highlights"
import Testimonials from "../testimonials"
import About from "../about"

const Main = () => {

  return (
    <main className={style.main}>

      <Highlights />

      <Testimonials />

      <About />

    </main>
  )
}

export default Main