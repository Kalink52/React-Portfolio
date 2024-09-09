
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

import { ThemeProvider } from "@material-tailwind/react";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Header />
      <div className='body dark:text-white'>
      <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
