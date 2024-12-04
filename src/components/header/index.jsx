import { Link } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import style from "./style.module.css"
import HeroSection from "../shared/hero-section"
import { useState } from "react"
import iconMenu from "../../assets/icon_mobile.svg"
import iconCloseMenu from "../../assets/icon_close.png"
import menuImage from "../../assets/menu.webp"

const Header = ({ HeroSectionOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={style.header}>
      <div className={style.container_content}>
        <img src={logo} alt="" />
        <nav>
          <button 
            className={style.button_mobile_menu} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img src={mobileMenuOpen ? iconCloseMenu : iconMenu} alt="" />
          </button>
          <ul className={
            mobileMenuOpen 
            ? style.ul_open 
            : style.ul}
          >
            <li>
              <Link to={"/"} className={style.a}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={style.a}>
                About
              </Link>
            </li>
            <li>
              <a className={style.a} href={menuImage} target="_blank">
                Menu
              </a>
            </li>
            <li>
              <Link className={style.a} to="/reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link className={style.a} to="/order_online">
                Order online
              </Link>
            </li>
            <li>
              <Link className={style.a} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {
        HeroSectionOpen ? 
        (
          <HeroSection />
        )
        : null
      }
    </header>
  )
}

export default Header