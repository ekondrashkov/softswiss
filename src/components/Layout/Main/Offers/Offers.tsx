import { Container } from "../../Container/Container"
import { OffersItem } from "./OffersItem/OffersItem"
import "./offers.scss"

import space1 from "../../../../assets/images/space1.webp"
import space2 from "../../../../assets/images/space2.webp"
import space3 from "../../../../assets/images/space3.webp"
import space4 from "../../../../assets/images/space4.webp"

export const Offers = () => {
  return (
    <div className="offers" id="offers">
      <Container className="offers__container">
        <h3 className="offers__title">Offers</h3>
        <div className="offers__list">
          <OffersItem
            size="full"
            backgroundSrc={space1}
            title="Move the borders of reality!"
            text="Go on a space adventure - it's possible with us!"
          />
          <OffersItem
            size="half"
            backgroundSrc={space2}
            title="Space is not just stars and planets"
            text="Go on a space adventure "
          />
          <OffersItem
            size="half"
            backgroundSrc={space3}
            title="For those who dream of stars"
            text="Our offer: make your dream come true"
          />
          <OffersItem
            size="full"
            backgroundSrc={space4}
            title="Fulfill your fantastic dreams"
            text="Space has never been so close"
          />
        </div>
      </Container>
    </div>
  )
}
