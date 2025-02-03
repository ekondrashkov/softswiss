import { Container } from "../../Container/Container"
import "./hero.scss"

export const Hero = () => {
  return (
    <div className="hero" id="home">
      <Container className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Discover the vast expanses of{" "}
            <span className="hero__title_end">space</span>
          </h1>
          <h2 className="hero__subtitle">
            Where the possibilities are{" "}
            <span className="hero__subtitle_end">endless!</span>
          </h2>
          <button className="hero__button" aria-label="Learn more">
            Learn more
          </button>
        </div>
      </Container>
    </div>
  )
}
