import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero></Hero>
              <Projects></Projects>
              <Technologies></Technologies>
            </>
          }
        />
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
