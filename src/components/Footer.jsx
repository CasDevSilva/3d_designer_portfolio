import { Box, Flex, Heading } from "@chakra-ui/react"
import { colors } from "../lib/colors"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <Box width="100%" background={colors.dark}>
            <Flex
                maxW="1200px"
                mx="auto"
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={3}
            >
                <Heading
                    color={colors.light}
                    size={{ base: "md", md: "lg" }}
                >Luis Rimachi</Heading>
                <Flex gap={4}>
                    <Box
                        color={colors.light}
                        fontSize={{ base: "xl", md: "2xl" }}
                        cursor="pointer"
                        _hover={{ opacity: 0.7 }}
                    >
                        <FaLinkedin />
                    </Box>
                    <Box
                        color={colors.light}
                        fontSize={{ base: "xl", md: "2xl" }}
                        cursor="pointer"
                        _hover={{ opacity: 0.7 }}
                    >
                        <FaInstagram />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer