import { render, screen } from "@testing-library/react"
import App from "./components/App"

test("renders hero", () => {
  render(<App />)
  const heroElement = screen.getByText(/Discover the vast/i)
  expect(heroElement).toBeInTheDocument()
})
