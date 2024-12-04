import { useState } from "react"
import Footer from "../components/footer"
import Form from "../components/form"
import Header from "../components/header"

const Reservations = () => {
  const [date, setDate] = useState("")
  const [resTime, setResTime] = useState("17:00")
  const [guests, setGuests] = useState("1")
  const [occasion, setOccasion] = useState("Birthday")

  return (
    <>
      <Header HeroSection={false} />
      <Form 
        date={date} 
        setDate={setDate} 
        resTime={resTime} 
        setResTime={setResTime} 
        guests={guests} 
        setGuests={setGuests} 
        occasion={occasion} 
        setOccasion={setOccasion} 
      />
      <Footer />
    </>
  )
}

export default Reservations