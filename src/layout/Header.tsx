import searchImgPath from '../assets/icons/search.svg'

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div>LOGO</div>
            <form className="search-form">
              <button className="search-form__btn">
                <img className="search-form__btn-icon" src={searchImgPath} alt="" />
              </button>
              <input className="search-form__input" type="text" placeholder="пошук товарів" />
            </form>
            <div className="header__actions">
              <button className="header__user"></button>
              <button className="header__favorites"></button>
              <button className="header__card"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
