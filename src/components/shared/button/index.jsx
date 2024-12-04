import style from "./style.module.css"

const Button = ({ label }) => {

  return (
    <a href="/" className={style.a}>
      {label}
    </a>
  )
}

export default Button