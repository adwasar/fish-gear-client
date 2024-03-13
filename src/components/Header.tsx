import { FormEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'

import imgPathSearch from '../assets/icons/search.svg'
import imgPathUser from '../assets/icons/user.svg'
import imgPathLiked from '../assets/icons/liked.svg'
import imgPathCard from '../assets/icons/card.svg'

import BurgerMenu from './BurgerMenu'
import Cart from './Cart'

function Header() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const openBurgerMenu = () => {
    setBurgerIsOpen(true)
  }

  const closeBurgerMenu = () => {
    setBurgerIsOpen(false)
  }

  const openCart = () => {
    setBurgerIsOpen(false)
    setCartIsOpen(true)
  }

  const closeCart = () => {
    setCartIsOpen(false)
  }

  const search = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <NavLink to="/">LOGO</NavLink>
            </div>
            <button className="burger" onClick={openBurgerMenu}>
              <span className="burger__tt"></span>
              <span className="burger__mm"></span>
              <span className="burger__bb"></span>
            </button>
            <form className="search-form">
              <button className="search-form__btn" onClick={search}>
                <img className="search-form__btn-icon" src={imgPathSearch} alt="Search" />
              </button>
              <input className="search-form__input" type="text" placeholder="пошук товарів" />
            </form>
            <div className="header__actions">
              <button className="header__btn-user">
                <NavLink to="/in">
                  <img src={imgPathUser} alt="User" />
                </NavLink>
              </button>
              <button className="header__btn-liked">
                <NavLink to="/bookmarks">
                  <img src={imgPathLiked} alt="Bookmarks" />
                </NavLink>
              </button>
              <button className="header__btn-card" onClick={openCart}>
                <img src={imgPathCard} alt="Card" />
              </button>
            </div>
          </div>
        </div>
        <BurgerMenu
          burgerIsOpen={burgerIsOpen}
          closeBurgerMenu={closeBurgerMenu}
          openCart={openCart}
        />
        <Cart cartIsOpen={cartIsOpen} closeCart={closeCart} />
      </div>
    </>
  )
}

export default Header
