import Footer from "../components/Footer";
import Header from "../components/Header"
import Portfolio from "../components/Portfolio";

const mObjHomePageInfo = {
    // src: "../../public/img/homepage_banner.jpg",
    src: "img/homepage_banner.jpg",
    message: "Luis Rimachi | Diseñador de Interiores",
    type: "banner" // banner|row|image
};

const HomePage = () => {
    return (
        <>
            <Header
                src = { mObjHomePageInfo.src }
                message = { mObjHomePageInfo.message }
                type = {mObjHomePageInfo.type}
            />
            <Portfolio/>
            <Footer/>
        </>
    )
}

export default HomePage