import { NavLink } from 'react-router-dom'

function Top() {
  return (
    <>
      <nav className="top">
        <div className="container">
          <ul className="top__list">
            <li>
              <NavLink to="/payment-and-delivery">Доставка і оплата</NavLink>
            </li>
            <li>
              <NavLink to="/about">Про магазин</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Відгуки</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакти</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Top
