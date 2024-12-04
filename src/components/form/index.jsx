import style from "./style.module.css"
import { useEffect } from "react"
import { fetchAPI } from "../../bookingApi"
import { useReducer } from "react"
import { useState } from "react"

const Form = ({ date, setDate, resTime, setResTime, guests, setGuests, occasion, setOccasion }) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setDate("")
    setGuests(1)
    setOccasion("Birthday")
    setResTime("17:00")
  }

  const updateTimes = (date) => {
    return fetchAPI(date)
  } 

  const output = fetchAPI(new Date())

  const [availableTimes, dispatch] = useReducer(updateTimes, output)

  useEffect(() => {
    console.log(output)
  }, [output])

  const [finalTimes, setFinalTimes] = useState(
    output.map(item => item)
  )

  const handleDataChange = (e) => {
    setDate(e.target.value)

    const stringify = e.target.value;
    const date = new Date(stringify)

    updateTimes(date)

    setFinalTimes(availableTimes.map(times => times))
  }
  

  return (
    <main>
      <div className={style.container}>

        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="res-date">Choose date</label>
          <input required type="date" data-testid="res-date" id="res-date" value={date} onChange={(e) => {
            handleDataChange(e)
            setDate(e.currentTarget.value)
          } } />

          <label htmlFor="res-time">Choose time</label>
          <select required data-testid="res-time" id="res-time" value={resTime} onChange={(e) => setResTime(e.currentTarget.value)}>
            {
              finalTimes.map((time, index) => <option key={index}>{time}</option>)
            }
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input required data-testid="guests" type="number" value={guests} placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.currentTarget.value)} />

          <label htmlFor="occasion">Occasion</label>
          <select required data-testid="occasion" id="occasion" value={occasion} onChange={(e) => setOccasion(e.currentTarget.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input data-testid="submit" type="submit" value="Make Your reservation" />
        </form>

      </div>
    </main>
  )
}

export default Form