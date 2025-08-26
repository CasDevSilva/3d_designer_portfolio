import { useState } from "react";
import CardProject from "./CardProject";
import { Box, Flex, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import { colors } from "../lib/colors";

let mArrProjects = [
    {
        name: "Project 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "model"
    },
    {
        name: "Project 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "model"
    },
    {
        name: "Project 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // src: "../../public/img/render_cards.jpg",
        src: "img/render_cards.jpg",
        type: "project"
    },
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
        <Flex
            flexDirection="column"
            gap="1rem"
            p={[".5rem 1rem", "1rem", "1rem", "1rem 7.5rem", "1rem 20rem"]}
        >
            <Heading
                as="h2"
                size="2xl"
                color={colors.dark}
                // border="1px solid red"
            >Proyectos & Tools</Heading>
            <Stack direction="row" spacing={10}>
                <List>
                    <ListItem
                        key="all"
                        cursor="pointer"
                        _hover={{
                            background: "#000",
                            color: "#fff"
                        }}
                        onClick={() => filterProjects(["model", "project"])}
                        >Todos</ListItem>
                </List>
                <List>
                    <ListItem
                        key="projects"
                        cursor="pointer"
                        _hover={{
                            background: "#000",
                            color: "#fff"
                        }}
                        onClick={() => filterProjects(["project"])}
                        >Proyectos</ListItem>
                </List>
                <List>
                    <ListItem
                        key="models"
                        cursor="pointer"
                        _hover={{
                            background: "#000",
                            color: "#fff"
                        }}
                        onClick={() => filterProjects(["model"])}
                    >Modelos 3D</ListItem>
                </List>
            </Stack>
            <hr/>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2.5%"}}>
                {cardsProjects}
            </div>
        </Flex>
    )
}

export default Portfolio