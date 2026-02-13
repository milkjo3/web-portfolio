import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1>Joseph Milliken</h1>
        <p>Software Engineer</p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
