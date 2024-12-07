import { useState, useEffect } from "react";

const CorAleatoria = () => {
    const [cor, setCor] = useState("rgb(255, 255, 255)");

    useEffect(() => {
        document.body.style.backgroundColor = cor;
    }, [cor]);

    // função que altera a cor
    function gerarCorAleatoria() {
        let vermelho = numeroAleatorio();
        let verde = numeroAleatorio();
        let azul = numeroAleatorio();

        setCor(`rgb(${vermelho}, ${verde}, ${azul})`);
    }

    // função que gera número entre 0 e 255
    function numeroAleatorio() {
        return Math.floor(Math.random() * 256);
    }

    return (
        <div className="container">
            {/* exibe a cor atual */}
            <h1>Cor atual: {cor}</h1>

            <div className="container-btns">
                {/* botão para chamar a função de alterar a cor */}
                <button onClick={gerarCorAleatoria}>
                    Alterar cor de fundo
                </button>
            </div>
        </div>
    );
};

export default CorAleatoria;
