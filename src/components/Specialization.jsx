import { SiAutocad } from "react-icons/si";
import CardSpecialization from "./CardSpecialization"

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
        <div>
            <h2>Habilidades</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {
                    mArrObjHabilites.map(mRowHabilitie =>
                        <CardSpecialization
                            name={ mRowHabilitie.name }
                            icon={ mRowHabilitie.icon }
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Specialization