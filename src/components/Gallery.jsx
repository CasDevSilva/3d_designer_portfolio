const Gallery = (props) => {
    let { images } = props;

    return (
        <div>
            {
                images.map(mRowImage => <img style={{
                    width: `${100/images.length}%`
                }} src={mRowImage}/>)
            }
        </div>
    )
}

export default Gallery