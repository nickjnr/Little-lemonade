import style from "./style.module.css"
import logoFooter from "../../assets/footer-logo.png"
import { Link } from "react-router-dom"
import menuImage from "../../assets/menu.webp"

const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className={style.container}>

        <img className={style.footerLogo} src={logoFooter} alt="" />

        <div className="col1">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href={menuImage} target="_blank">Menu</a>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order_online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>         
        </div>
        <div className="col2">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/">2395 Maldove Way.</a>
            </li>
            <li>
              <a href="/">Chicago Illinois</a>
            </li>
            <li>
              <a href="/">(629)-243-6827</a>
            </li>
            <li>
              <a href="/">info@littlelemon.com</a>
            </li>
          </ul>
        </div>

        <div className="col3">
          <h4>Connect</h4>

          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Join us!</a>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  )
}

export default Footer