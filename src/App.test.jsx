import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';

test("Renders the app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  const h1Element = screen.getByTestId("h1")

  expect(h1Element).toBeInTheDocument()
})