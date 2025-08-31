import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { colors } from "../lib/colors"

const AboutSection = () => {
    return (
        <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 8, md: 10, lg: 12 }}
        >
            <Flex
                direction={{ base: "column", lg: "row" }}
                align="center"
                gap={{ base: 6, md: 8, lg: 12 }}
                textAlign={{ base: "center", lg: "left" }}
            >
                {/* Image Section */}
                <Box
                    flexShrink={0}
                    mb={{ base: 4, lg: 0 }}
                >
                    <Image
                        src="./img/luis_rimachi.jpg"
                        alt="Luis Rimachi"
                        width={{ base: "200px", md: "250px", lg: "280px" }}
                        height={{ base: "200px", md: "250px", lg: "280px" }}
                        borderRadius="50%"
                        border={`5px solid ${colors.ascent}`}
                        p={2}
                        objectFit="cover"
                        boxShadow="md"
                    />
                </Box>

                {/* Content Section */}
                <Box flex={1}>
                    <Heading
                        as="h2"
                        size={{ base: "lg", md: "xl", lg: "2xl" }}
                        color={colors.dark}
                        mb={{ base: 4, md: 5 }}
                        fontWeight="bold"
                    >
                        Luis Angel Rimachi Silva
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight={{ base: "1.6", md: "1.7" }}
                        color={colors.dark}
                        textAlign={{ base: "center", lg: "justify" }}
                        maxW={{ base: "100%", lg: "none" }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default AboutSection