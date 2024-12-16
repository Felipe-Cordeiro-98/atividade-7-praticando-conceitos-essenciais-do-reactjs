import { useState } from "react";
import Button from "./Button";
import "../styles/GaleriaDeImagens.css";

export default function GaleriaDeImagens() {
    // Array contendo as URLs das imagens
    const imagens = [
        "https://via.placeholder.com/300x200?text=Imagem+1",
        "https://via.placeholder.com/300x200?text=Imagem+2",
        "https://via.placeholder.com/300x200?text=Imagem+3",
        "https://via.placeholder.com/300x200?text=Imagem+4",
    ];

    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    function fecharModal() {
        setImagemSelecionada(null);
    }
    
    // Função para navegar entre as imagens no modal
    function navegarImagens(direcao) {
        const indexAtual = imagens.indexOf(imagemSelecionada);
        const novoIndex =
            (indexAtual + direcao + imagens.length) % imagens.length;
        setImagemSelecionada(imagens[novoIndex]);
    }

    return (
        <div className="galeria-container">
            <h1>Galeria de Imagens</h1>
            <div className="galeria">
                {imagens.map((imagem, index) => (
                    <img
                        key={index}
                        className="galeria-img"
                        src={imagem}
                        alt={`Imagem ${index + 1}`}
                        onClick={() => setImagemSelecionada(imagem)}
                    />
                ))}
            </div>

            {imagemSelecionada && (
                <div className="galeria-modal">
                    <Button btnFunction={fecharModal} text="x" />
                    <img src={imagemSelecionada} alt="Imagem Ampliada" />
                    <div>
                        <Button
                            btnFunction={() => navegarImagens(-1)}
                            text="Anterior"
                        />
                        <Button
                            btnFunction={() => navegarImagens(1)}
                            text="Próxima"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
