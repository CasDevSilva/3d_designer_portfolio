import { LuAxe } from "react-icons/lu";
import CardService from "./CardService"

let mArrObjServices = [
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        icon: <LuAxe />
    },
    {
        name: "Previsualizacion",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        icon: <LuAxe />
    }
]

const Services = () => {
    return (
        <div>
            <h2>Servicios</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {
                    mArrObjServices.map(mRowService =>
                        <CardService
                            name={mRowService.name}
                            description={mRowService.description}
                            icon={mRowService.icon}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Services