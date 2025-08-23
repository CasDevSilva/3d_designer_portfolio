import { useState } from "react";
import CardProject from "./CardProject";

let mArrProjects = [
    {
        name: "Project 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
        type: "model"
    },
    {
        name: "Project 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
        type: "project"
    },
    {
        name: "Project 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
        type: "model"
    },
    {
        name: "Project 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        src: "../../public/img/render_cards.jpg",
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
        <main>
            <h1>Projects</h1>
            <ul>
                <li key="all" style={{cursor: 'pointer'}} onClick={() => filterProjects(["model", "project"])}>Todos</li>
                <li key="projects" style={{cursor: 'pointer'}} onClick={() => filterProjects(["project"])}>Proyectos</li>
                <li key="models" style={{cursor: 'pointer'}} onClick={() => filterProjects(["model"])}>Modelos 3D</li>
            </ul>
            <hr/>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2.5%"}}>
                {cardsProjects}
            </div>
        </main>
    )
}

export default Portfolio