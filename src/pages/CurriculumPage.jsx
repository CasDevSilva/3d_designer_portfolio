import Curriculum from "../components/Curriculum";
import Footer from "../components/Footer"
import Header from "../components/Header"

const mObjCVInfo = {
    src: "../../public/img/homepage_banner.jpg",
    type: "image" // banner|row|image
};

const CurriculumPage = () => {
    return (
        <>
            <Header
                src={mObjCVInfo.src}
                type={mObjCVInfo.type}
            />
            <Curriculum/>
            <Footer/>
        </>
    )
}
export default CurriculumPage