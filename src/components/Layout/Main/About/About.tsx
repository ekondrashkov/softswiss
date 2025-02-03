import React from "react"
import { Container } from "../../Container/Container"
import "./about.scss"

export const About = () => {
  const [isTextExpanded, setIsTextExpanded] = React.useState(false)

  return (
    <div className="about">
      <Container className="about__container">
        <h3 className="about__title">Embark on a space journey</h3>
        <p className={isTextExpanded ? "about__text expanded" : "about__text"}>
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <button
          className="about__more_button"
          onClick={() => setIsTextExpanded(!isTextExpanded)}
          aria-label={isTextExpanded ? "Read less" : "Read more"}
        >
          {isTextExpanded ? "Read less" : "Read more"}
        </button>
      </Container>
    </div>
  )
}
