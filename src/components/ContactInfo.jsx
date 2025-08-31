import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { colors } from "../lib/colors"

const ContactInfo = () => {
    return (
        <Box
            width={{ base: "100%", lg: "50%" }}
            px={{ base: 6, md: 8 }}
            py={{ base: 8, md: 10 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={{ base: 8, md: 10 }}
        >
            <Box
                transition={{ base: "none", md: "transform 0.3s ease-in-out" }}
                _hover={{
                    base: {},
                    md: { transform: "translateY(-4px)" }
                }}
            >
                <Heading
                    as="h2"
                    size={{ base: "lg", md: "xl" }}
                    color={colors.dark}
                    mb={4}
                >Contacto Directo</Heading>
                <List spacing={3}>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        gap={3}
                        color={colors.dark}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        <Box
                            color={colors.secondary}
                            fontSize="xl"
                        >
                            <FaEnvelope />
                        </Box>
                        <Text>myemail@gmail.com</Text>
                    </ListItem>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        gap={3}
                        color={colors.dark}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        <Box
                            color={colors.secondary}
                            fontSize="xl"
                        >
                            <FaPhone />
                        </Box>
                        <Text>+51 999999999</Text>
                    </ListItem>
                </List>
            </Box>

            <Box
                transition={{ base: "none", md: "transform 0.3s ease-in-out" }}
                _hover={{
                    base: {},
                    md: { transform: "translateY(-4px)" }
                }}
            >
                <Heading
                    as="h3"
                    size={{ base: "lg", md: "xl" }}
                    color={colors.dark}
                    mb={4}
                >Redes sociales</Heading>
                <Flex gap={6}>
                    <Box
                        color={colors.secondary}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        cursor={{ base: "default", md: "pointer" }}
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                color: colors.primary,
                                transform: "scale(1.2)"
                            }
                        }}
                    >
                        <FaLinkedin />
                    </Box>
                    <Box
                        color={colors.secondary}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        cursor={{ base: "default", md: "pointer" }}
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                color: colors.primary,
                                transform: "scale(1.2)"
                            }
                        }}
                    >
                        <FaInstagram />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default ContactInfo