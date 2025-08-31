import { Box, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../lib/colors";

const HeaderLayer_Partition = (props) => {
    let mObjParams = props;

    return (
        <Box
            position="relative"
            height={{ base: "70vh", md: "75vh", lg: "550px", xl: "650px" }}
            overflow="hidden"
        >
            {/* Background Image - Always present */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                backgroundImage={mObjParams.src}
                backgroundSize="cover"
                backgroundPosition="center"
                display={{ base: "block", lg: "none" }}
            />

            {/* Desktop Layout */}
            <Flex
                height="100%"
                direction="row"
                display={{ base: "none", lg: "flex" }}
            >
                {/* Image section - Only visible on desktop */}
                <Box
                    width="50%"
                    backgroundImage={mObjParams.src}
                    backgroundSize="cover"
                    backgroundPosition="center"
                />

                {/* Text section - Desktop */}
                <Flex
                    width="50%"
                    background={colors.primary}
                    flexDirection="column"
                    justifyContent="center"
                    gap={6}
                    px={16}
                    py={10}
                >
                    <Heading
                        as="h1"
                        size="4xl"
                        color={colors.light}
                        lineHeight="1.1"
                    >{mObjParams.message.title}</Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        color={colors.secondary}
                        lineHeight="1.2"
                    >{mObjParams.message.subtitle}</Heading>
                </Flex>
            </Flex>

            {/* Mobile Overlay - Full layer on top */}
            <Flex
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                background="rgba(26, 26, 26, 0.8)"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={{ base: 4, md: 6 }}
                px={{ base: 6, md: 12 }}
                py={{ base: 8, md: 10 }}
                display={{ base: "flex", lg: "none" }}
                zIndex={1}
            >
                <Heading
                    as="h1"
                    size={{ base: "2xl", md: "3xl" }}
                    color={colors.light}
                    lineHeight="1.2"
                    textAlign="center"
                >{mObjParams.message.title}</Heading>
                <Heading
                    as="h2"
                    size={{ base: "lg", md: "xl" }}
                    color={colors.secondary}
                    lineHeight="1.3"
                    textAlign="center"
                >{mObjParams.message.subtitle}</Heading>
            </Flex>
        </Box>
    )
}

export default HeaderLayer_Partition