import { Container } from "../Container/Container"
import "./footer.scss"
import rocket from "../../../assets/images/rocket.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <img className="footer__img" src={rocket} alt="Rocket" />
        <span className="footer__text">Exciting space adventure!</span>
      </Container>
    </footer>
  )
}
