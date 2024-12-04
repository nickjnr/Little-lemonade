import style from "./style.module.css"
import greeksalad from "../../assets/greeksalad.jpg"
import bruchetta from "../../assets/bruchetta.svg"
import lemonDessert from "../../assets/lemondessert.jpg"
import Button from "../shared/button"
import Card from "../shared/card"

const Highlights = () => {

  return (
    <>
      <section className={style.text}>
        
        <h2>This weeks specials!</h2>
        <Button label={"Online Menu"} />

      </section>

      <section className={style.parent}>


        <Card img={greeksalad} description={"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} price={"$ 12.99"} title={"Greek salad"} />

        <Card img={bruchetta} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."} price={"$ 5.99"} title={"Bruchetta"} />

        <Card img={lemonDessert} description={"This comes straight from gradma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} price={"$ 5.00"} title={"Lemon Dessert"} />

      </section>
    </>
  )
}

export default Highlights