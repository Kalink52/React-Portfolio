import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    // TODO errorElement:
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
