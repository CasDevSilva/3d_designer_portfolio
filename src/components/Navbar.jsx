import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { colors } from "../lib/colors"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
    return (
        <Box width="100%" background={colors.dark}>
            <Flex
                maxW="1200px"
                mx="auto"
                justify="space-between"
                align="center"
                px={4}
                py={3}
            >
                {/* Title de Navbar */}
                <Flex align="center" gap={2}>
                    <Box>
                        <Link to="/">
                            <img src="/img/logo.png" width="50px"/>
                        </Link>
                    </Box>
                    <Heading
                        as="h1"
                        size={{ base: "lg", md: "xl", lg: "2xl" }}
                        color={colors.light}>Luis Rimachi</Heading>
                </Flex>

                {/* Navbar Links - Hidden on mobile, visible on desktop */}
                <Flex
                    display={{ base: "none", lg: "flex" }}
                    gap={6}
                    color={colors.light}
                >
                    <Box><Link to="/">Inicio</Link></Box>
                    <Box><Link to="/about">Acerca de</Link></Box>
                    <Box><Link to="/cv">Curriculum</Link></Box>
                    <Box><Link to="/contact">Contacto</Link></Box>
                </Flex>

                {/* Hamburger Menu - Visible on mobile, hidden on desktop */}
                <Flex display={{ base: "flex", lg: "none" }}>
                    <Box
                        color={colors.light}
                        fontSize="xl"
                        cursor="pointer"
                    >
                        <RxHamburgerMenu />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar