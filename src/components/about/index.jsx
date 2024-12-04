import style from "./style.module.css"
import food1 from "../../assets/food2.jpeg"
import food2 from "../../assets/food3.jpeg"

const About = () => {

  return (
    <section className={style.parent}>
      <div className={style.container}>

        <div className={style.text}>
          <h5>Little Lemon</h5>
          <p className={style.city}>Chicago</p>
          <p>Little Lemon opened in 1995 by two italian brothers, Adrian and Mario. Despite the city’s diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>

        <div className={style.images}>
          <img className={style.image1} src={food1} alt="" />
          <img className={style.image2} src={food2} alt="" />
        </div>

      </div>
    </section>
  )
}

export default About