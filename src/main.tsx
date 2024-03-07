import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LayoutWrapper from './layout/LayoutWrapper'
import HomePage from './pages/HomePage'
import PaymentAndDeliveryPage from './pages/PaymentAndDeliveryPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactsPage from './pages/ContactsPage'
import NotFoundPage from './pages/NotFoundPage'
import UserPage from './pages/UserPage'
import BookmarksPage from './pages/BookmarksPage'

import 'normalize.css'
import './sass/main.sass'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/payment-and-delivery',
        element: <PaymentAndDeliveryPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/reviews',
        element: <ReviewsPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '/in',
        element: <UserPage />,
      },
      {
        path: '/bookmarks',
        element: <BookmarksPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
