import style from "./style.module.css"
import starIcon from "../../../assets/star.png"

const TestimonialsCard = ({ title, description }) => {

  return (
    <div className={style.parent}>
      <img src={starIcon} alt="" />
      <p className={style.title}>
        {title}
      </p>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default TestimonialsCard