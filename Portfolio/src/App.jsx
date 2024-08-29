import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='body dark:text-white'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
