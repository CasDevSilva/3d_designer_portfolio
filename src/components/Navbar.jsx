import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { colors } from "../lib/colors"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

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
                        onClick={toggleMobileMenu}
                    >
                        <RxHamburgerMenu />
                    </Box>
                </Flex>
            </Flex>

            {/* Mobile Menu - Only visible when hamburger is clicked */}
            {isMobileMenuOpen && (
                <Box
                    display={{ base: "block", lg: "none" }}
                    background={colors.dark}
                    borderTop="1px solid rgba(255, 255, 255, 0.1)"
                >
                    <Flex
                        direction="column"
                        maxW="1200px"
                        mx="auto"
                        px={4}
                        py={4}
                        gap={3}
                        color={colors.light}
                    >
                        <Box py={2} borderBottom="1px solid rgba(255, 255, 255, 0.1)">
                            <Link to="/" onClick={toggleMobileMenu}>Inicio</Link>
                        </Box>
                        <Box py={2} borderBottom="1px solid rgba(255, 255, 255, 0.1)">
                            <Link to="/about" onClick={toggleMobileMenu}>Acerca de</Link>
                        </Box>
                        <Box py={2} borderBottom="1px solid rgba(255, 255, 255, 0.1)">
                            <Link to="/cv" onClick={toggleMobileMenu}>Curriculum</Link>
                        </Box>
                        <Box py={2}>
                            <Link to="/contact" onClick={toggleMobileMenu}>Contacto</Link>
                        </Box>
                    </Flex>
                </Box>
            )}
        </Box>
    )
}

export default Navbar