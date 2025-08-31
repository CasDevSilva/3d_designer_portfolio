import { SiAutocad } from "react-icons/si";
import CardSpecialization from "./CardSpecialization";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../lib/colors";

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

const Specialization = () => {
    return (
        <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 8, md: 10, lg: 12 }}
        >
            <Flex
                flexDirection="column"
                gap={{ base: 6, md: 8 }}
            >
                <Heading
                    as="h3"
                    size={{ base: "lg", md: "xl", lg: "2xl" }}
                    color={colors.dark}
                    textAlign={{ base: "center", lg: "left" }}
                    mb={{ base: 2, md: 4 }}
                >
                    Habilidades
                </Heading>

                <Flex
                    flexWrap="wrap"
                    gap={{ base: 4, md: 6, lg: 8 }}
                    justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
                    alignItems="center"
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
            </Flex>
        </Box>
    )
}


export default Specialization