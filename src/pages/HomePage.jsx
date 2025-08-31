import Footer from "../components/Footer"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"

const HomePage = () => {
  return (
    <>
      <Header
        bg_style="text"
        message ="Luis Rimachi | Diseñador de Interiores"
        src     ="./img/banner.jpg"
      />
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default HomePage