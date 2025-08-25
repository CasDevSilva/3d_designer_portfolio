import { Heading } from "@chakra-ui/react";
import Navbar from "./Navbar"

const Header = (props) => {
    let mObjData = props;

    return (
        <header>
            <Navbar/>
            {
                mObjData.type == "banner"
                    ? <div style={{ width: "100%"}}>
                        <Heading>{mObjData.message}</Heading>
                    </div>
                    : mObjData.type == "row"
                        ? <div>
                            <div style={{width: "50%"}}>
                                <Heading as="h1" size="2xl">{mObjData.message.title}</Heading>
                                <Heading as="h2" size="xl">{mObjData.message.subtitle}</Heading>
                            </div>
                            <div style={{width: "50%"}}></div>
                        </div>
                        : mObjData.type == "image"
                            ? <div style={{background:`url(${mObjData.src})`, width: "100%", height: "75vh", backgroundSize: "cover"}}></div>
                            : <div></div>
            }
        </header>
    )
}

export default Header