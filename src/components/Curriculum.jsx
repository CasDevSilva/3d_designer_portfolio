import { SiAutocad } from "react-icons/si";
import CardSpecialization from "./CardSpecialization";

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

const Curriculum = () => {
    return (
        <div style={{display: "grid", gridTemplateColumns:"1fr 2fr"}}>
            <div>
                <div>
                    {/* <img style={{width: "100%"}} src="../../public/img/luis_rimachi.jpg" alt="" /> */}
                    <img style={{width: "100%"}} src="img/luis_rimachi.jpg" alt="" />
                    <h1>Luis Rimachi Silva</h1>
                    <h2>Diseñador de Interiores 3D</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div>
                    <ul>
                        <li>email@gmail.com</li>
                        <li>+51 999999999</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h2>Educacion</h2>
                    <div>
                        <h3>CIBERTEC</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div>
                    <h2>Proyectos Personales</h2>
                    <div>
                        <h3>Proyecto 1</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div>
                        <h3>Proyecto 1</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div>
                        <h3>Proyecto 1</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div>
                    <h3>Habilidades</h3>
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
            </div>
        </div>
    )
}

export default Curriculum