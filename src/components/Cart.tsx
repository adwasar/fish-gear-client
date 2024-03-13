interface CartProps {
  cartIsOpen: boolean
  closeCart: () => void
}

function Cart({ cartIsOpen, closeCart }: CartProps) {
  return (
    <>
      <aside className={`cart ${cartIsOpen ? 'active' : ''}`}>
        <header className="cart__header">
          <button className="cart__btn-close btn-close" onClick={closeCart}>
            <span className="btn-close__tt"></span>
            <span className="btn-close__bb"></span>
          </button>
        </header>
        <div className="cart__body">
          <h1>Cart</h1>
        </div>
      </aside>
      <div className={`cart-overlay ${cartIsOpen ? 'active' : ''}`}></div>
    </>
  )
}

export default Cart
