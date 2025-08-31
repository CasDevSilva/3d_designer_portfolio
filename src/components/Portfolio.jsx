import { Flex, Heading, Box, Button } from "@chakra-ui/react";
import CardProject from "./CardProject";
import { useState } from "react";
import { colors } from "../lib/colors";

let mArrProjects = [
    {
        name: "Project 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "model"
    },
    {
        name: "Project 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "project"
    },
    {
        name: "Project 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "project"
    },
    {
        name: "Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "project"
    },
    {
        name: "Project 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "model"
    },
    {
        name: "Project 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "./img/render_card.jpg",
        type: "project"
    }
]

const Portfolio = () => {
    function setCards(pArrProjects) {
        return pArrProjects.map((mRowProject, index) =>
            <CardProject
                key={index}
                index={index}
                name={mRowProject.name}
                src={mRowProject.src}
            />
        );
    }

    function filterProjects(pArrFilterTypes) {
        let mArrFilteredProjects = mArrProjects
            .filter(mRowProject => pArrFilterTypes.includes(mRowProject.type));

            setCardsProject(setCards(mArrFilteredProjects));
    }

    const [cardsProjects, setCardsProject] = useState(setCards(mArrProjects));

    return (
        <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 6, md: 8, lg: 10 }}
        >
            <Flex
                flexDirection="column"
                gap={{ base: 4, md: 6 }}
            >
                <Heading
                    as="h2"
                    size={{ base: "xl", md: "2xl" }}
                    color={colors.dark}
                    textAlign={{ base: "center", lg: "left" }}
                >Proyectos & Tools</Heading>

                {/* Filter buttons - Hidden on mobile, visible on desktop */}
                <Flex
                    display={{ base: "none", lg: "flex" }}
                    gap={4}
                    justifyContent="flex-end"
                    flexWrap="wrap"
                >
                    <Button
                        variant="outline"
                        colorScheme="gray"
                        size="sm"
                        bg="transparent"
                        color={colors.dark}
                        borderColor={colors.dark}
                        _hover={{
                            bg: colors.dark,
                            color: colors.light
                        }}
                        onClick={() => filterProjects(["model", "project"])}
                    >
                        Todos
                    </Button>
                    <Button
                        variant="outline"
                        colorScheme="gray"
                        size="sm"
                        bg="transparent"
                        color={colors.dark}
                        borderColor={colors.dark}
                        _hover={{
                            bg: colors.dark,
                            color: colors.light
                        }}
                        onClick={() => filterProjects(["project"])}
                    >
                        Proyectos
                    </Button>
                    <Button
                        variant="outline"
                        colorScheme="gray"
                        size="sm"
                        bg="transparent"
                        color={colors.dark}
                        borderColor={colors.dark}
                        _hover={{
                            bg: colors.dark,
                            color: colors.light
                        }}
                        onClick={() => filterProjects(["model"])}
                    >
                        Modelos 3D
                    </Button>
                </Flex>

                {/* Divider - Only visible on desktop */}
                <Box
                    height="1px"
                    bg={colors.secondary}
                    display={{ base: "none", lg: "block" }}
                />

                {/* Projects Grid */}
                <Flex
                    flexWrap="wrap"
                    justifyContent={{ base: "center", md: "space-between" }}
                    alignItems="flex-start"
                    gap={{ base: 4, md: 6 }}
                >
                    {cardsProjects}
                </Flex>
            </Flex>
        </Box>
    )
}

export default Portfolio