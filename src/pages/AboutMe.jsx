import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Services from "../components/Services"
import Specialization from "../components/Specialization"

let mArrGallery = [
    "img/gallery_image.jpg",
    "img/gallery_image.jpg",
    "img/gallery_image.jpg",
    "img/gallery_image.jpg",
    "img/gallery_image.jpg",
]

const AboutMe = () => {
  return (
    <>
      <Header
        bg_style="part"
        src     ="./img/banner.jpg"
        message = {{
          title: "Acerca de",
          subtitle: "Diseñador de Interiores 3D"
        }}
      />
      <AboutSection/>
      <Gallery
        images={mArrGallery}
      />
      <Specialization/>
      <Services/>
      <Footer/>
    </>
  )
}

export default AboutMe