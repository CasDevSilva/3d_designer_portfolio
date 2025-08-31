import { Box, Heading, Text } from "@chakra-ui/react";
import { colors } from "../lib/colors";

const CardService = (props) => {
    let mObjService = props;
    return (
        <Box
            width={{ base: "100%", md: "48%", lg: "30%" }}
            mt={{ base: 4, md: 6 }}
            p={{ base: 5, md: 6, lg: 7 }}
            bg={colors.primary}
            borderRadius={{ base: "16px", md: "20px 20px 12px 12px" }}
            border={`2px solid ${colors.ascent}`}
            boxShadow="sm"
            cursor={{ base: "default", md: "pointer" }}
            transition={{ base: "none", md: "all 0.3s ease-in-out" }}
            _hover={{
                base: {},
                md: {
                    bg: colors.ascent,
                    transform: "translateY(-4px)",
                    boxShadow: "lg",
                    borderColor: colors.secondary
                }
            }}
        >
            <Box
                fontSize={{ base: "3xl", md: "4xl" }}
                color={colors.secondary}
                mb={{ base: 3, md: 4 }}
                transition={{ base: "none", md: "transform 0.2s ease-in-out" }}
                _groupHover={{
                    transform: "scale(1.1)"
                }}
            >
                { mObjService.icon }
            </Box>
            <Heading
                as="h4"
                size={{ base: "md", md: "lg" }}
                mb={{ base: 3, md: 4 }}
                color={colors.light}
                fontWeight="bold"
            >{ mObjService.name }</Heading>
            <Text
                fontSize={{ base: "sm", md: "md" }}
                lineHeight={{ base: "1.5", md: "1.6" }}
                color={colors.light}
                opacity={0.9}
            >{ mObjService.description }</Text>
        </Box>
    )
}

export default CardService