const CardSpecialization = (props) => {
    let mObjDataHabilite = props;

    return (
        <div>
            {mObjDataHabilite.icon}
            <p>{ mObjDataHabilite.name }</p>
        </div>
    )
}

export default CardSpecialization