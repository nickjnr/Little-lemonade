import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Form from "./index"

test("Renders the form", () => {

  render(
    <Form 
      date={""}
      guests={"1"}
      occasion={"Birthday"}
      resTime={"17:00"}
      setDate={() => {}}
      setGuests={() => {}}
      setOccasion={() => {}}
      setResTime={() => {}}
    />
  )

  const resDateInput = screen.getByTestId("res-date")
  const resTimeSelect = screen.getByTestId("res-time")
  const guestsInput = screen.getByTestId("guests")
  const occasionInput = screen.getByTestId("occasion")
  const buttonSubmit = screen.getByTestId("submit")

  expect(resDateInput).toHaveValue("")
  expect(resTimeSelect).toHaveValue("17:00")
  expect(guestsInput).toHaveValue(1)
  expect(occasionInput).toHaveValue("Birthday")

  fireEvent.click(buttonSubmit)
  
})