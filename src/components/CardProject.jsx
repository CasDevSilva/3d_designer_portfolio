import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { colors } from "../lib/colors";
import Btn from "./Btn";

const CardProject = (props) => {
    let mObjCardInfo = props;

    const handleViewDetails = () => {
        if (mObjCardInfo.action) {
            mObjCardInfo.action();
        }
    };

    return (
        <Box
            key={ mObjCardInfo.index }
            width={{ base: "100%", md: "48%", lg: "45%" }}
            overflow="hidden"
            background={colors.ascent}
            mt={{ base: 4, md: 6 }}
            borderRadius={{ base: "15px", md: "20px 20px 10px 10px" }}
            position="relative"
            transition={{ base: "none", md: "all 0.3s ease-in-out" }}
            _hover={{
                base: {},
                md: {
                    background: colors.secondary,
                    transform: "translateY(-5px)",
                    boxShadow: "lg"
                }
            }}
            sx={{
                "&:hover img": {
                    base: {},
                    md: {
                        transform: "scale(1.1)"
                    }
                }
            }}
        >
            <Box overflow="hidden">
                <Image
                    src={ mObjCardInfo.src }
                    alt={ mObjCardInfo.name }
                    width="100%"
                    height={{ base: "200px", md: "250px", lg: "300px" }}
                    objectFit="cover"
                    transition={{ base: "none", md: "transform 0.3s ease-in-out" }}
                />
            </Box>
            <Flex
                direction="column"
                justify="space-between"
                py={{ base: 3, md: 4 }}
                px={{ base: 3, md: 4 }}
                minH={{ base: "80px", md: "100px" }}
            >
                <Heading
                    as="h2"
                    size={{ base: "md", md: "lg" }}
                    color={colors.light}
                    textAlign="left"
                    mb={3}
                >{ mObjCardInfo.name }</Heading>
                <Box alignSelf="flex-end">
                    <Btn
                        message="Ver detalles"
                        action={handleViewDetails}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default CardProject;