import { SiAutocad } from "react-icons/si"
import CardSpecialization from "./CardSpecialization"
import { Box, Flex, Heading, Image, List, ListItem, Text } from "@chakra-ui/react"
import { colors } from "../lib/colors"
import Btn from "./Btn"

let mArrObjHabilites = [
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
    {
        name: "Autocad",
        icon: <SiAutocad />
    },
]

const CV = () => {
    return (
        <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 6, md: 8, lg: 10 }}
        >
            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 8, md: 10, lg: 12 }}
                align={{ base: "center", lg: "flex-start" }}
            >
                {/* Left Column - Profile */}
                <Flex
                    flexDirection="column"
                    width={{ base: "100%", lg: "35%" }}
                    gap={{ base: 6, md: 8 }}
                    textAlign={{ base: "center", lg: "left" }}
                >
                    {/* Profile Section */}
                    <Box>
                        <Box
                            width={{ base: "200px", md: "250px", lg: "280px" }}
                            height={{ base: "200px", md: "250px", lg: "280px" }}
                            borderRadius="50%"
                            overflow="hidden"
                            border={`4px solid ${colors.ascent}`}
                            mx={{ base: "auto", lg: "0" }}
                            mb={4}
                        >
                            <Image
                                src="./img/luis_rimachi.jpg"
                                alt="Luis Rimachi Silva"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                            />
                        </Box>
                        <Heading
                            as="h1"
                            size={{ base: "lg", md: "xl" }}
                            color={colors.dark}
                            mb={2}
                        >Luis Rimachi Silva</Heading>
                        <Heading
                            as="h2"
                            size={{ base: "md", md: "lg" }}
                            color={colors.secondary}
                            mb={4}
                        >Diseñador de Interiores 3D</Heading>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="1.6"
                            color={colors.dark}
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Box>

                    {/* Contact Section */}
                    <Box>
                        <Heading
                            as="h3"
                            size={{ base: "md", md: "lg" }}
                            color={colors.dark}
                            mb={3}
                        >Contacto</Heading>
                        <List spacing={2}>
                            <ListItem
                                fontSize={{ base: "sm", md: "md" }}
                                color={colors.dark}
                            >email@gmail.com</ListItem>
                            <ListItem
                                fontSize={{ base: "sm", md: "md" }}
                                color={colors.dark}
                            >+51 999999999</ListItem>
                        </List>
                    </Box>
                    <Btn message="Descargar CV"/>
                </Flex>

                {/* Right Column - Content */}
                <Box
                    width={{ base: "100%", lg: "65%" }}
                    flex="1"
                >
                    <Flex
                        flexDirection="column"
                        gap={{ base: 6, md: 8 }}
                    >
                        {/* Education Section */}
                        <Box>
                            <Heading
                                as="h3"
                                size={{ base: "lg", md: "xl" }}
                                color={colors.dark}
                                mb={4}
                            >Educación</Heading>
                            <Box
                                p={4}
                                bg={colors.primary}
                                borderRadius="md"
                                border={`2px solid ${colors.ascent}`}
                            >
                                <Heading
                                    as="h4"
                                    size={{ base: "md", md: "lg" }}
                                    color={colors.light}
                                    mb={2}
                                >CIBERTEC</Heading>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    lineHeight="1.6"
                                    color={colors.light}
                                    opacity={0.9}
                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                            </Box>
                        </Box>

                        {/* Skills Section */}
                        <Box>
                            <Heading
                                as="h3"
                                size={{ base: "lg", md: "xl" }}
                                color={colors.dark}
                                mb={4}
                            >Habilidades</Heading>
                            <Flex
                                flexWrap="wrap"
                                gap={{ base: 3, md: 4 }}
                                justifyContent={{ base: "center", lg: "flex-start" }}
                            >
                                {
                                    mArrObjHabilites.map((mRowHabilitie, index) =>
                                        <CardSpecialization
                                            key={index}
                                            name={mRowHabilitie.name}
                                            icon={mRowHabilitie.icon}
                                        />
                                    )
                                }
                            </Flex>
                        </Box>

                        {/* Projects Section */}
                        <Box>
                            <Heading
                                as="h3"
                                size={{ base: "lg", md: "xl" }}
                                color={colors.dark}
                                mb={4}
                            >Proyectos Personales</Heading>
                            <Flex
                                flexDirection="column"
                                gap={4}
                            >
                                {[1, 2, 3].map((projectNum, index) => (
                                    <Box
                                        key={index}
                                        p={4}
                                        bg={colors.primary}
                                        borderRadius="md"
                                        border={`2px solid ${colors.ascent}`}
                                    >
                                        <Heading
                                            as="h4"
                                            size={{ base: "sm", md: "md" }}
                                            color={colors.light}
                                            mb={2}
                                        >Proyecto {projectNum}</Heading>
                                        <Text
                                            fontSize={{ base: "sm", md: "md" }}
                                            lineHeight="1.6"
                                            color={colors.light}
                                            opacity={0.9}
                                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                                    </Box>
                                ))}
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default CV