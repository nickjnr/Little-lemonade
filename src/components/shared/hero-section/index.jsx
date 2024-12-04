import style from "./style.module.css"
import restaurantFood from "../../../assets/restauranfood.jpg"
import Button from "../../shared/button"

const HeroSection = () => {
  
  return (
    <div className={`${style.hero_container} hero_container`}>

        <section className={style.section}>

          <div className={style.text}>
            <h1 className={style.h1} data-testid="h1">Little Lemon</h1>
            <p className={style.city}>Chicago</p>
            <p className={style.description}>We are a family owned Mediterraneam restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button label={"Reserve a table"} />
          </div>

          <img className={style.img} src={restaurantFood} alt="" />

        </section>

      </div>
  )
}

export default HeroSection