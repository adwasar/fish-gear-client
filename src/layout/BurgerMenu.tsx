import { NavLink } from 'react-router-dom'

import imgPathUser from '../assets/icons/user.svg'
import imgPathLiked from '../assets/icons/liked.svg'
import imgPathCard from '../assets/icons/card.svg'

function BurgerMenu({ burgerIsOpen, closeBurgerMenu }) {
  return (
    <>
      <aside className={`burger-menu ${burgerIsOpen ? 'active' : ''}`}>
        <header className="burger-menu__header">
          <button className="burger-menu__btn-user">
            <img src={imgPathUser} alt="User" />
          </button>
          <button className="burger-menu__btn-liked">
            <img src={imgPathLiked} alt="Liked" />
          </button>
          <button className="header__btn-card">
            <img src={imgPathCard} alt="Card" />
          </button>
          <button className="burger-menu__btn-close" onClick={closeBurgerMenu}>
            <span className="burger-menu__btn-close-tt"></span>
            <span className="burger-menu__btn-close-bb"></span>
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
