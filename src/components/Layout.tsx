import { Outlet } from 'react-router-dom'

import Top from './Top'
import Header from './Header'

function HomePage() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Top />
          <Header />
        </header>
        <main>
          <div className="container">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
