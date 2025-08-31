import { Box } from "@chakra-ui/react";
import HeaderLayer_Partition from "./HeaderLayer_Partition";
import HeaderLayer_Text from "./HeaderLayer_Text";
import Navbar from "./Navbar"

const Header = (props) => {
    const mObjParams = props;
    let mElemBanner = <Box></Box>;

    if (mObjParams.bg_style == "text") {
        mElemBanner = <HeaderLayer_Text
            src={mObjParams.src}
            message={mObjParams.message}
        />
    }
    if (mObjParams.bg_style == "part") {
        mElemBanner = <HeaderLayer_Partition
            src={mObjParams.src}
            message={mObjParams.message}
        />
    }

    return (
        <header>
            <Navbar/>
            {mElemBanner}
        </header>
    )
}

export default Header