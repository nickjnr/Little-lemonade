import TestimonialsCard from "../shared/testimonialsCard"
import style from "./style.module.css"

const Testimonials = () => {

  return (
    <section className={style.testimonials}>

      <div className={style.container}>

        <h4>Testimonials</h4>

        <section className={style.parentCards}>

          <TestimonialsCard title={"Michael Caldwell"} description={"This is the best Mediterranean food that i've ever had."} />
          
          <TestimonialsCard title={"Alan Chen"} description={"My Shiba Inu, Mugi, really loved the cozy and delicious food here."} />

          <TestimonialsCard title={"Casey Lau"} description={"I’ve had some great mediterranean food before, but none of them beats Little Lemon in flavor and texture."} />

          <TestimonialsCard title={"Jhon Rosenblum"} description={"Great food, welcoming staff, atmosphere. A great place to treat your kids to."} />

          <TestimonialsCard title={"Jim Reynor"} description={"The food here really refreshed me after a late night shift at the local supply depot."} />

          <TestimonialsCard title={"Brian Dean"} description={"I came to Little Lemon after a 5 hour filght from the East Coast. The food here tasted so delicious after the trip here."} />

          <TestimonialsCard title={"Tyler Tohmine"} description={"The food here was fire! Everyone should try this place out if they live in Chicago."} />

          <TestimonialsCard title={"Jack Hu"} description={"This restaurant served as a perfect dinner for me a after long night  of studying, I would definitely order from here again."} />

        </section>

      </div>

    </section>
  )
}

export default Testimonials