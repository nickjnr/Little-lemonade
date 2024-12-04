import style from "./style.module.css";
import motorbike from "../../../assets/motorbike.png";

const Card = ({ img, title, description, price }) => {

  return (
    <section className={style.card}>
      <img src={img} alt="" />

      <div className={style.text}>
        <div className={style.title_price}>
          <h3 className={style.h3}>{title}</h3>
          <p className={style.price}>{price}</p>
        </div>

        <p className={style.description}>{description}</p>

        <button className={style.button}>
          Order delivery
          <img src={motorbike} alt="" />
        </button>
      </div>

    </section>
  )
}

export default Card