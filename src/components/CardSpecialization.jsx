import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../lib/colors";

const CardSpecialization = (props) => {
    let mObjDataHabilite = props;

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={{ base: 4, md: 5 }}
            height={{ base: "120px", md: "140px" }}
            width={{ base: "120px", md: "140px" }}
            borderRadius="50%"
            bg={colors.ascent}
            border={{ base: `2px solid ${colors.secondary}`, md: `2px solid ${colors.ascent}` }}
            cursor={{ base: "default", md: "pointer" }}
            transition={{ base: "none", md: "all 0.3s ease-in-out" }}
            boxShadow={{ base: "none", md: "sm" }}
            _hover={{
                base: {},
                md: {
                    bg: colors.dark,
                    transform: "translateY(-4px)",
                    boxShadow: "lg",
                    borderColor: colors.secondary
                }
            }}
            _active={{
                base: {},
                md: {
                    transform: "translateY(-2px)"
                }
            }}
        >
            <Box
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={2}
                color={colors.light}
                transition={{ base: "none", md: "transform 0.2s ease-in-out" }}
            >
                {mObjDataHabilite.icon}
            </Box>
            <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                textAlign="center"
                color={colors.light}
                lineHeight="1.2"
                noOfLines={2}
            >
                {mObjDataHabilite.name}
            </Text>
        </Flex>
    )
}

export default CardSpecialization