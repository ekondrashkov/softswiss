import { About } from "./About/About"
import { Hero } from "./Hero/Hero"
import { Offers } from "./Offers/Offers"
import "./main.scss"

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Offers />
      <About />
    </main>
  )
}
