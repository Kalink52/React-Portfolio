import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='body'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
