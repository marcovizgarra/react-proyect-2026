const ComponentePresentacion = ({ titulo1, titulo2 }) => {
    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-warning bg-white p-3 text-uppercase fst-italic">{titulo1}</h2>
                        <h3>{titulo2}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponentePresentacion