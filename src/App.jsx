import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutMe from "./pages/AboutMe"
import Curriculum from "./pages/Curriculum"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<HomePage/>}/>
          <Route path="/about"    element={<AboutMe/>}/>
          <Route path="/cv"       element={<Curriculum/>}/>
          <Route path="/contact"  element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App