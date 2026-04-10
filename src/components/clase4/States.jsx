import { useState } from "react";

const States = () => {
    const [texto, setTexto] = useState('Curso de JavaScript');
    const modificarTexto = () => {
        setTexto("Curso React JS")
    };

    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="display-1">Estados / Sattes</h2>
                        <p>
                            <button onClick={modificarTexto}>Modificar texto</button>
                        </p>
                        <p>{texto}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default States