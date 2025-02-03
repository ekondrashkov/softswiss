import React from "react"
import "./dropdown-menu.scss"

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const closeDropdown = () => setIsOpen(false)

  const onDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", onDocumentClick)
      return () => document.removeEventListener("click", onDocumentClick)
    }
  }, [isOpen])

  return (
    <div className={isOpen ? "dropdown opened" : "dropdown"} ref={dropdownRef}>
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown__line" />
      </button>
      <div className="dropdown__menu">
        <ul className="dropdown__list">
          <li className="dropdown__item">
            <a
              href="#home"
              className="dropdown__link"
              onClick={closeDropdown}
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li className="dropdown__item">
            <a
              href="#offers"
              className="dropdown__link"
              onClick={closeDropdown}
              aria-label="Products"
            >
              Products
            </a>
          </li>
          <li className="dropdown__item" onClick={closeDropdown}>
            <button className="dropdown__cart" aria-label="Cart" />
          </li>
        </ul>
      </div>
    </div>
  )
}
