const CardService = (props) => {
    let mObjService = props;

    return (
        <div style={{ width: "30%"}}>
            { mObjService.icon }
            <h3>{ mObjService.name }</h3>
            <p>{ mObjService.description }</p>
        </div>
    )
}

export default CardService;