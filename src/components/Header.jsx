import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar"
import { colors } from "../lib/colors";

const Header = (props) => {
    let mObjData = props;

    return (
        <header>
            <Navbar/>
            {
                mObjData.type == "banner"
                    ?<Flex
                            backgroundImage={mObjData.src}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            height="70vh"
                            justifyContent="center"
                            alignItems="center"
                            p={[".5rem 1rem", "1rem", "1rem", "1rem 7.5rem", "1rem 20rem"]}
                        >
                            <Heading
                                color={colors.light}
                                as="h1"
                                size={["xl", "xl", "2xl","3xl"]}
                            >{mObjData.message}</Heading>
                        </Flex>
                    : mObjData.type == "row"
                        ? <Flex
                            backgroundImage={[mObjData.src, mObjData.src, "none", "none"]}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            height="70vh"
                        >
                            <Box
                                display={["none", "none", "block", "block"]}
                                width="50%"
                                backgroundImage={mObjData.src}
                                backgroundSize="cover"
                                backgroundPosition="center"
                            ></Box>
                            <Flex
                                width={["100%", "100%", "50%", "50%"]}
                                background={[colors.primary_opacity_70, colors.primary_opacity_70, colors.primary, colors.primary]}
                                color={[colors.light, colors.light, colors.dark, colors.dark]}
                                flexDirection="column"
                                justifyContent="center"
                                gap="1rem"
                                p={["0 5rem"]}
                            >
                                <Heading
                                    as="h1"
                                    size="3xl"
                                >{mObjData.message.title}</Heading>
                                <Heading
                                    as="h2"
                                    size="xl"
                                >{mObjData.message.subtitle}</Heading>
                            </Flex>
                        </Flex>
                        : mObjData.type == "image"
                            ? <Box
                                backgroundImage={mObjData.src}
                                backgroundSize="cover"
                                backgroundPosition="center"
                                height="70vh"
                                ></Box>
                            : <Box></Box>
            }
        </header>
    )
}

export default Header