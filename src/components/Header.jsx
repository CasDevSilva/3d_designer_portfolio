import Navbar from "./Navbar"

const Header = (props) => {
    let mObjData = props;

    return (
        <header>
            <Navbar/>
            {
                mObjData.type == "banner"
                    ? <div style={{ width: "100%"}}>
                        <h1>{mObjData.message}</h1>
                    </div>
                    : mObjData.type == "row"
                        ? <div>
                            <div style={{width: "50%"}}>
                                <h1>{mObjData.message.title}</h1>
                                <h2>{mObjData.message.subtitle}</h2>
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