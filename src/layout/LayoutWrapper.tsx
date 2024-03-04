import { Outlet } from 'react-router-dom'

import Top from './Top'
import Header from './Header'

function HomePage() {
  return (
    <>
      <header>
        <Top />
        <Header />
      </header>
      <main>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  )
}

export default HomePage
