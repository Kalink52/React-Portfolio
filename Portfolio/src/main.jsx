import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
// import Resume from './pages/Resume.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
