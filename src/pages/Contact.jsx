import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import MoreContact from "../components/MoreContact";

const Contact = () => {
    return (
        <>
            <Header/>
            <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)"}}>
                <FormContact/>
                <MoreContact/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact