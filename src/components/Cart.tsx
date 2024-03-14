import { useEffect, useRef } from 'react'

interface CartProps {
  cartIsOpen: boolean
  closeCart: () => void
}

function Cart({ cartIsOpen, closeCart }: CartProps) {
  const CartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!CartRef.current?.contains(e.target as Node)) {
        closeCart()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      <aside className={`cart ${cartIsOpen ? 'active' : ''}`} ref={CartRef}>
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
