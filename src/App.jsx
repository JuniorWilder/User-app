import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Menu } from './Components/Menu'
import { Footer } from './Components/Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Menu/>
      <Outlet/>
      <Footer/>
    </Container>
    </>
  )
}

export default App
