import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CurriculumPage from "./pages/CurriculumPage"
import Contact from "./pages/Contact"
import { ChakraProvider } from "@chakra-ui/react";
import "./lib/styles.css";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<HomePage/>}/>
          <Route path="/about"    element={<AboutPage/>}/>
          <Route path="/cv"       element={<CurriculumPage/>}/>
          <Route path="/contact"  element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;