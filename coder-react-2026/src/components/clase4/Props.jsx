import logoBlanco from "/logo/allWhiteLogo.png";

// Ejemplo 1: recibio un prop como objeto

// const Props = (prop) => {
//     return (
//         <>
//             <h2>{prop.titulo}</h2>
//             <h3>{prop.subtitulo}</h3>
//         </>
//     )
// };


// Ejemplo 2: recibo una prop y la desestructuro (destructuring)

const Logo = ({url, texto, ancho}) => {
    return(
        <>
            <img src={url} alt={texto} width={ancho} className="img-tumbnail" />
        </>
    )
}

const Props = ({titulo, subtitulo}) => {
    return(
        <div className="container">
            <div className="row">
                <h2 className="col">{titulo}</h2>
                <h3 className="col">{subtitulo}</h3>
                <Logo url={logoBlanco} alt={"allWhiteLogo"} ancho={200} />
            </div>
        </div>
    )
};

export default Props