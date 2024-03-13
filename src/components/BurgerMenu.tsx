import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import imgPathUser from '../assets/icons/user.svg'
import imgPathLiked from '../assets/icons/liked.svg'
import imgPathCard from '../assets/icons/card.svg'

interface BurgerMenuProps {
  burgerIsOpen: boolean
  closeBurgerMenu: () => void
  openCart: () => void
}

function BurgerMenu({ burgerIsOpen, closeBurgerMenu, openCart }: BurgerMenuProps) {
  const burgerMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!burgerMenuRef.current?.contains(e.target as Node)) {
        closeBurgerMenu()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      <aside className={`burger-menu ${burgerIsOpen ? 'active' : ''}`} ref={burgerMenuRef}>
        <header className="burger-menu__header">
          <button className="burger-menu__btn-user">
            <NavLink to="/in" onClick={closeBurgerMenu}>
              <img src={imgPathUser} alt="User" />
            </NavLink>
          </button>
          <button className="burger-menu__btn-liked">
            <NavLink to="/bookmarks" onClick={closeBurgerMenu}>
              <img src={imgPathLiked} alt="Bookmarks" />
            </NavLink>
          </button>
          <button className="header__btn-card" onClick={openCart}>
            <img src={imgPathCard} alt="Card" />
          </button>
          <button className="burger-menu__btn-close btn-close" onClick={closeBurgerMenu}>
            <span className="btn-close__tt"></span>
            <span className="btn-close__bb"></span>
          </button>
        </header>
        <nav className="burger-menu__nav">
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <NavLink to="/payment-and-delivery" onClick={closeBurgerMenu}>
                Доставка і оплата
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink to="/about" onClick={closeBurgerMenu}>
                Про магазин
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink to="/reviews" onClick={closeBurgerMenu}>
                Відгуки
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink to="/contacts" onClick={closeBurgerMenu}>
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className={`burger-menu-overlay ${burgerIsOpen ? 'active' : ''}`}></div>
    </>
  )
}

export default BurgerMenu
