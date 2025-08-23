import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header"
import Services from "../components/Services";
import Specialization from "../components/Specialization";

const mObjAboutMePageInfo = {
    // src: "../../public/img/homepage_banner.jpg",
    src: "img/homepage_banner.jpg",
    message: {
        title: "Acerca de",
        subtitle: "Diseñador de Interiores 3D"
    },
    type: "row" // banner|row|image
};

let mArrGallery = [
    // "../../public/img/galley_images.jpg",
    // "../../public/img/galley_images.jpg",
    // "../../public/img/galley_images.jpg",
    // "../../public/img/galley_images.jpg",
    // "../../public/img/galley_images.jpg",
    "img/galley_images.jpg",
    "img/galley_images.jpg",
    "img/galley_images.jpg",
    "img/galley_images.jpg",
    "img/galley_images.jpg",
]

const AboutPage = () => {
    return (
        <>
            <Header
                src = { mObjAboutMePageInfo.src }
                message = { mObjAboutMePageInfo.message }
                type = {mObjAboutMePageInfo.type}
            />
            <AboutMe/>
            <Specialization/>
            <Gallery
                images={ mArrGallery }
            />
            <Services/>
            <Footer/>
        </>
    )
}

export default AboutPage