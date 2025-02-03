import "./offers-item.scss"

export type OffersItemSize = "full" | "half"

interface OffersItemProps {
  size: OffersItemSize
  backgroundSrc: string
  title: string
  text: string
}

export const OffersItem = ({
  size,
  backgroundSrc,
  title,
  text,
}: OffersItemProps) => {
  return (
    <div
      className={`offers__item ${
        size === "full" ? "offers__item_full" : "offers__item_half"
      }`}
      style={{
        background: `linear-gradient(rgba(15, 20, 32, 0), rgba(15, 20, 32, .79)), url(${backgroundSrc})`,
      }}
    >
      <h3 className="offers__item_title">{title}</h3>
      <p className="offers__item_text">{text}</p>
      <button className="offers__item_button" aria-label="Learn more">
        Learn more
      </button>
    </div>
  )
}
