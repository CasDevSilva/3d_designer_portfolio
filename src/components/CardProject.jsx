const CardProject = (props) => {
    let mObjCardInfo = props;

    return (
        <div key={ mObjCardInfo.index } style={{ width: "45%", overflow: "hidden"}}>
            <img style={{width: "100%", objectFit:"cover"}} src={ mObjCardInfo.src } alt={ mObjCardInfo.name }/>
            <h2>{ mObjCardInfo.name }</h2>
        </div>
    )
}

export default CardProject;