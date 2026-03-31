let nombre = 'Marco Vizgarra';
let imagen = 'logo/redWhiteLogo.png'

const ComponenteClase3 = () => {
    return (
        <>
            <h2>{nombre}</h2>
            <div>
                <img src={imagen} alt="logo" width={250}/>
            </div>
        </>
    );
}

export default ComponenteClase3;