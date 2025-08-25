import { Box, Flex, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { colors } from "../lib/colors"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
    return (
        <Flex
            background={colors.dark}
            color={colors.light}
            width="100%"
            p={[".5rem 1rem", "1rem", "1rem", "1rem 20rem"]}
            justifyContent="space-between"
        >
            <Flex
                // border="1px solid blue"
                w={["80%", "80%", "80%", "50%"]}
                alignItems="center"
                gap="5%"
                >
                    <Box
                        w={["20%", "15%", "10%", "10%"]}
                    >
                        <Link to="/">
                            <img src="/img/logo.png"
                                width="100%"
                                // id="navbar_img"
                            />
                        </Link>
                    </Box>
                <Heading
                    // border="1px solid blue"
                    size="xl"
                    display={["none", "block", "block"]}
                    width="100%"
                >
                    Luis Rimachi
                </Heading>
            </Flex>
            {/* Responsive NavBar */}
            <Flex
                // border="1px solid red"
                display={["flex", "flex", "flex", "none"]}
                justifyContent="center"
                alignItems="center"
                w={["20%", "20%", "20%", "0%"]}
            >
                <p style={{fontSize: "2rem"}}>
                    <IoMenu/>
                </p>
            </Flex>
            <Flex
                // border="1px solid red"
                display={["none", "none", "none", "flex"]}
                w={["0%", "0%", "0%", "50%"]}
                alignItems="center"
                justifyContent="right"
                gap="5%"
            >
                <Box><Link to="/">Inicio</Link></Box>
                <Box><Link to="/about">Acerca de</Link></Box>
                <Box><Link to="/cv">Curriculum</Link></Box>
                <Box><Link to="/contact">Contacto</Link></Box>
            </Flex>
        </Flex>
    )
}

export default Navbar