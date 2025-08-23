import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CurriculumPage from "./pages/CurriculumPage"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<HomePage/>}/>
        <Route path="/about"    element={<AboutPage/>}/>
        <Route path="/cv"       element={<CurriculumPage/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;