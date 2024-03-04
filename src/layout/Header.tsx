import imgPathSearch from '../assets/icons/search.svg'
import imgPathUser from '../assets/icons/user.svg'
import imgPathLiked from '../assets/icons/liked.svg'
import imgPathCard from '../assets/icons/card.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <NavLink to="/">
              <div className="header__logo">LOGO</div>
            </NavLink>
            <div className="burger">
              <span className="burger__tt"></span>
              <span className="burger__mm"></span>
              <span className="burger__bb"></span>
            </div>
            <form className="search-form">
              <button className="search-form__btn">
                <img className="search-form__btn-icon" src={imgPathSearch} alt="Search" />
              </button>
              <input className="search-form__input" type="text" placeholder="пошук товарів" />
            </form>
            <div className="header__actions">
              <button className="header__btn-user">
                <img src={imgPathUser} alt="User" />
              </button>
              <button className="header__btn-liked">
                <img src={imgPathLiked} alt="Heard" />
              </button>
              <button className="header__btn-card">
                <img src={imgPathCard} alt="Card" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
