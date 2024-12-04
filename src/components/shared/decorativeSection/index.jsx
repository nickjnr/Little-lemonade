import style from "./style.module.css"

const DecorativeSection = ({ title }) => {

  return (  
    <div className={style.parent}>
      <h1>{title}</h1>
    </div>
  )
}

export default DecorativeSection