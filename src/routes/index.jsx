import { Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import PageAboutUs from "../pages/About"
import OrderOnline from "../pages/OrderOnline"
import Login from "../pages/Login"
import Reservations from "../pages/Reservations"

const CustomRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<PageAboutUs />} />
      <Route path="/order_online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  )
}

export default CustomRoutes