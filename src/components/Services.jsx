import { LuAxe } from "react-icons/lu"
import CardService from "./CardService"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { colors } from "../lib/colors"

let mArrObjServices = [
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: <LuAxe />
    }
]

const Services = () => {
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
                    Servicios
                </Heading>

                <Flex
                    flexWrap="wrap"
                    gap={{ base: 4, md: 6 }}
                    justifyContent={{ base: "center", md: "space-between", lg: "flex-start" }}
                    alignItems="stretch"
                >
                    {
                        mArrObjServices.map((mRowService, index) =>
                            <CardService
                                key={index}
                                name={mRowService.name}
                                description={mRowService.description}
                                icon={mRowService.icon}
                            />
                        )
                    }
                </Flex>
            </Flex>
        </Box>
    )
}

export default Services